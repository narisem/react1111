import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>컨솔창을 확인해주십시오。</h3>
      <label>
        입력갌 이벤트：
        <input
          type="text"
          onChange={() => console.log("onChange감지")}
          onBlur={() => console.log("onBlur감지")}
          onFocus={() => console.log("onFocus감지")}
        />
      </label>
      {/* <div>
        <label>
          입력갌을 취득：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div> */}
      {/* <div
        className="hover-event"
        onMouseEnter={() => console.log("카설이 들어옴。")}
        onMouseLeave={() => console.log("카설이 나감。")}
      >
       허버해줘!
      </div> */}
    </div>
  );
};

export default Example;
