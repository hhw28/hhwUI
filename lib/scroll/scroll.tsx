import React, {
  HTMLAttributes,
  UIEventHandler,
  useRef,
  useEffect,
  useState,
  MouseEventHandler,
  TouchEventHandler,
} from "react";
import scrollBarWidth from "./scrollbar-width";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-scroll");
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void;
}

const isTouchDevice = "ontouchstart" in document.documentElement;

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, className, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouchDevice) {
      setBarVisible(false);
    }
  }, []);

  useEffect(() => {
    // 计算滚动条高度
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);

  const setBarTop = (number: number) => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;

    if (number < 0) return;
    if (number > maxBarTop) return;

    _setBarTop(number);
  };

  const timeIdRef = useRef<number | null>(null);

  const onScroll: UIEventHandler = (e) => {
    setBarVisible(true);
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    const srollTop = containerRef.current!.scrollTop;
    setBarTop((srollTop * viewHeight) / scrollHeight);
    timeIdRef.current = window.setTimeout(() => {
      if (isTouchDevice) {
        setBarVisible(false);
      }
    }, 3000);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("selectstart", onSelect);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("selectstart", onSelect);
    };
  }, []);

  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstbarTopRef = useRef(0);

  const onMouseDown: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstbarTopRef.current = barTop;
  };
  const onMouseMove = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstbarTopRef.current + delta;
      setBarTop(newBarTop);

      const scrollHeight = containerRef.current!.scrollHeight;
      const viewHeight = containerRef.current!.getBoundingClientRect().height;

      containerRef.current!.scrollTop = (newBarTop * scrollHeight) / viewHeight;
    }
  };
  const onMouseUp = () => {
    draggingRef.current = false;
  };

  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };

  //下拉刷新
  const [translateY, _setTranslateY] = useState(0);
  const lastYRef = useRef(0);
  const moveCountRef = useRef(0);
  const pullingRef = useRef(false);

  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    _setTranslateY(y);
  };
  const onTouchStart: TouchEventHandler = (e) => {
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) return;
    lastYRef.current = e.touches[0].clientY;
    moveCountRef.current = 0;
    pullingRef.current = true;
  };

  const onTouchMove: TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - lastYRef.current;
    moveCountRef.current += 1;

    if (moveCountRef.current === 1 && deltaY < 0) {
      pullingRef.current = false;
      return;
    }
    if (!pullingRef.current) return;

    setTranslateY(translateY + deltaY);
    lastYRef.current = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    if (pullingRef.current) {
      setTimeout(() => {
        setTranslateY(0);
      }, 1000);
      props.onPull && props.onPull();
      pullingRef.current = false;
    }
  };

  return (
    <div className={sc("", { extra: className })} {...rest}>
      <div
        className={sc("inner")}
        style={{
          right: -scrollBarWidth(),
          transform: `translateY(${translateY}px)`,
        }}
        onScroll={onScroll}
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      {barVisible && (
        <div className={sc("track")}>
          <div
            className={sc("bar")}
            style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
            onMouseDown={onMouseDown}
          ></div>
        </div>
      )}
      <div className={sc("pulling")} style={{ height: translateY }}>
        {translateY < 100 ? "下拉刷新" : "正在刷新"}
      </div>
    </div>
  );
};

export default Scroll;
