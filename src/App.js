import { useState } from "react";
import "./styles.css";

export default function App() {
  function Start() {
    const emojiPedia = {
      "๐": "Grinning Face",
      "๐": "Grinning Face with Big Eyes",
      "๐": "Grinning Face with Smiling Eyes",
      "๐": "Beaming Face with Smiling Eyes",
      "๐": "Grinning Squinting Face",
      "๐": "Grinning Face with Sweat",
      "๐คฃ": "Rolling on the Floor Laughing",
      "๐": "Face with Tears of Joy",
      "๐": "Slightly Smiling Face",
      "๐": "Upside-Down Face",
      "๐": "Winking Face",
      "๐": "Smiling Face with Smiling Eyes",
      "๐": "Smiling Face with Halo",
      "๐ฅฐ": "Smiling Face with Hearts",
      "๐": "Smiling Face with Heart-Eyes",
      "๐คฉ": "Star-Struck",
      "๐": "Face Blowing a Kiss",
      "๐": "Kissing Face",
      "๐": "Kissing Face with Closed Eyes",
      "๐": "Kissing Face with Smiling Eyes",
      "๐": "Face Savoring Food",
      "๐": "Face with Tongue",
      "๐": "Winking Face with Tongue",
      "๐คช": "Zany Face",
      "๐": "Squinting Face with Tongue",
      "๐ค": "Money-Mouth Face",
      "๐ค": "Smiling Face with Open Hands",
      "๐คญ": "Face with Hand Over Mouth",
      "๐คซ": "Shushing Face",
      "๐ค": "Thinking Face",
      "๐ค": "Zipper-Mouth Face",
      "๐คจ": "Face with Raised Eyebrow",
      "๐": "Neutral Face",
      "๐": "Expressionless Face",
      "๐ถ": "Face Without Mouth",
      "๐ถโ๐ซ๏ธ": "Face in Clouds",
      "๐": "Smirking Face",
      "๐": "Unamused Face",
      "๐": "Face with Rolling Eyes",
      "๐ฌ": "Grimacing Face",
      "๐ฎโ๐จ": "Face Exhaling",
      "๐คฅ": "Lying Face",
      "๐": "Relieved Face",
      "๐": "Pensive Face",
      "๐ช": "Sleepy Face",
      "๐คค": "Drooling Face",
      "๐ด": "Sleeping Face",
      "๐ท": "Face with Medical Mask",
      "๐ค": "Face with Thermometer",
      "๐ค": "Face with Head-Bandage",
      "๐คข": "Nauseated Face",
      "๐คฎ": "Face Vomiting",
      "๐คง": "Sneezing Face",
      "๐ฅต": "Hot Face",
      "๐ฅถ": "Cold Face",
      "๐ฅด": "Woozy Face",
      "๐ต": "Face with Crossed-Out Eyes",
      "๐ตโ๐ซ": "Face with Spiral Eyes",
      "๐คฏ": "Exploding Head",
      "๐ค?": "Cowboy Hat Face",
      "๐ฅณ": "Partying Face",
      "๐": "Smiling Face with Sunglasses",
      "๐ค": "Nerd Face",
      "๐ง": "Face with Monocle",
      "๐": "Confused Face",
      "๐": "Worried Face",
      "๐": "Slightly Frowning Face",
      "โน๏ธ": "Frowning Face",
      "๐ฎ": "Face with Open Mouth",
      "๐ฏ": "Hushed Face",
      "๐ฒ": "Astonished Face",
      "๐ณ": "Flushed Face",
      "๐ฅบ": "Pleading Face",
      "๐ฆ": "Frowning Face with Open Mouth",
      "๐ง": "Anguished Face",
      "๐จ": "Fearful Face",
      "๐ฐ": "Anxious Face with Sweat",
      "๐ฅ": "Sad but Relieved Face",
      "๐ข": "Crying Face",
      "๐ญ": "Loudly Crying Face",
      "๐ฑ": "Face Screaming in Fear",
      "๐": "Confounded Face",
      "๐ฃ": "Persevering Face",
      "๐": "Disappointed Face",
      "๐": "Downcast Face with Sweat",
      "๐ฉ": "Weary Face",
      "๐ซ": "Tired Face",
      "๐ฅฑ": "Yawning Face",
      "๐ค": "Face with Steam From Nose",
      "๐ก": "Enraged Face",
      "๐?": "Angry Face"
    };

    const [show, setShow] = useState("");

    const emojiList = Object.keys(emojiPedia);
    // console.log(emojiList);

    function changeHandler(event) {
      const input = event.target.value;
      const output = emojiPedia[input];
      //  console.log(output)

      if (output === undefined) {
        return setShow("Error!");
      }

      setShow(output);
    }

    function clickHandler(emoji) {
      const output = emojiPedia[emoji];
      setShow(output);
    }

    return (
      <div
        style={{
          width: "100%",
          padding: "0px 0px",
          margin: "auto"
        }}
      >
        <h1> Emojipedia </h1>
        <h3>
          {" "}
          Enter emoji here! <span style={{ color: "green" }}>๐</span>{" "}
        </h3>
        <input onChange={changeHandler} />
        <h1> {show} </h1>
        {emojiList.map((emoji) => {
          // console.log("128",emoji)
          return (
            <span
              onClick={() => clickHandler(emoji)}
              style={{ paddingRight: "10px", cursor: "pointer" }}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <Start />
    </div>
  );
}
