import { useState } from "react";
import "./styles.css";

export default function App() {
  function Start() {
    const emojiPedia = {
      "😀": "Grinning Face",
      "😃": "Grinning Face with Big Eyes",
      "😄": "Grinning Face with Smiling Eyes",
      "😁": "Beaming Face with Smiling Eyes",
      "😆": "Grinning Squinting Face",
      "😅": "Grinning Face with Sweat",
      "🤣": "Rolling on the Floor Laughing",
      "😂": "Face with Tears of Joy",
      "🙂": "Slightly Smiling Face",
      "🙃": "Upside-Down Face",
      "😉": "Winking Face",
      "😊": "Smiling Face with Smiling Eyes",
      "😇": "Smiling Face with Halo",
      "🥰": "Smiling Face with Hearts",
      "😍": "Smiling Face with Heart-Eyes",
      "🤩": "Star-Struck",
      "😘": "Face Blowing a Kiss",
      "😗": "Kissing Face",
      "😚": "Kissing Face with Closed Eyes",
      "😙": "Kissing Face with Smiling Eyes",
      "😋": "Face Savoring Food",
      "😛": "Face with Tongue",
      "😜": "Winking Face with Tongue",
      "🤪": "Zany Face",
      "😝": "Squinting Face with Tongue",
      "🤑": "Money-Mouth Face",
      "🤗": "Smiling Face with Open Hands",
      "🤭": "Face with Hand Over Mouth",
      "🤫": "Shushing Face",
      "🤔": "Thinking Face",
      "🤐": "Zipper-Mouth Face",
      "🤨": "Face with Raised Eyebrow",
      "😐": "Neutral Face",
      "😑": "Expressionless Face",
      "😶": "Face Without Mouth",
      "😶‍🌫️": "Face in Clouds",
      "😏": "Smirking Face",
      "😒": "Unamused Face",
      "🙄": "Face with Rolling Eyes",
      "😬": "Grimacing Face",
      "😮‍💨": "Face Exhaling",
      "🤥": "Lying Face",
      "😌": "Relieved Face",
      "😔": "Pensive Face",
      "😪": "Sleepy Face",
      "🤤": "Drooling Face",
      "😴": "Sleeping Face",
      "😷": "Face with Medical Mask",
      "🤒": "Face with Thermometer",
      "🤕": "Face with Head-Bandage",
      "🤢": "Nauseated Face",
      "🤮": "Face Vomiting",
      "🤧": "Sneezing Face",
      "🥵": "Hot Face",
      "🥶": "Cold Face",
      "🥴": "Woozy Face",
      "😵": "Face with Crossed-Out Eyes",
      "😵‍💫": "Face with Spiral Eyes",
      "🤯": "Exploding Head",
      "🤠": "Cowboy Hat Face",
      "🥳": "Partying Face",
      "😎": "Smiling Face with Sunglasses",
      "🤓": "Nerd Face",
      "🧐": "Face with Monocle",
      "😕": "Confused Face",
      "😟": "Worried Face",
      "🙁": "Slightly Frowning Face",
      "☹️": "Frowning Face",
      "😮": "Face with Open Mouth",
      "😯": "Hushed Face",
      "😲": "Astonished Face",
      "😳": "Flushed Face",
      "🥺": "Pleading Face",
      "😦": "Frowning Face with Open Mouth",
      "😧": "Anguished Face",
      "😨": "Fearful Face",
      "😰": "Anxious Face with Sweat",
      "😥": "Sad but Relieved Face",
      "😢": "Crying Face",
      "😭": "Loudly Crying Face",
      "😱": "Face Screaming in Fear",
      "😖": "Confounded Face",
      "😣": "Persevering Face",
      "😞": "Disappointed Face",
      "😓": "Downcast Face with Sweat",
      "😩": "Weary Face",
      "😫": "Tired Face",
      "🥱": "Yawning Face",
      "😤": "Face with Steam From Nose",
      "😡": "Enraged Face",
      "😠": "Angry Face"
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
          Enter emoji here! <span style={{ color: "green" }}>👇</span>{" "}
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
