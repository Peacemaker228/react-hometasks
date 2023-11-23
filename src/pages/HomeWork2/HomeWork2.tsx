import { useEffect, useRef, useState } from "react";
import "./styles.css";

export const HomeWork2 = () => {
  const node = useRef<HTMLDivElement | null>(null);

  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    if (node.current) {
      const currentProgress = node.current.scrollTop;
      const scrollHeight =
        node.current.scrollHeight - node.current.offsetHeight;
      setScroll((currentProgress / scrollHeight) * 100);
    }
  };

  useEffect(() => {
    let value: HTMLDivElement | null = null;
    if (node.current) {
      node.current.addEventListener("scroll", onScroll);
      value = node.current;
    }
    return () => {
      if (value) {
        value.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return (
    <div ref={node} className="wrapper">
      <div className="progress__container">
        <div style={{ width: `${scroll}%` }} className="progress__bar" />
      </div>
      <div className="content__container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus
          est, pellentesque non libero quis, rutrum sagittis nisl. Maecenas
          convallis metus ex. Etiam feugiat est odio, vehicula fringilla justo
          faucibus vel. In hac habitasse platea dictumst. Fusce ac lectus nec
          nulla ornare convallis sed fermentum mi. Ut tellus nunc, lobortis
          vitae lectus sit amet, cursus luctus odio. Etiam in arcu quis lacus
          molestie dictum. Aenean convallis est diam, at elementum felis
          facilisis a. Morbi sit amet egestas est. Donec gravida odio eget
          tristique bibendum. Vivamus aliquet sed tortor sollicitudin
          scelerisque. Aliquam non mauris lacinia, molestie tortor ut, sagittis
          lectus. Aliquam vel mauris id odio efficitur tempus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae;
        </p>
      </div>
    </div>
  );
};
