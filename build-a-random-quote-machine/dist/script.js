function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const quotes = [
{
  quote: "Don't cry because it's over, smile because it happened.",
  author: "Dr. Seuss" },

{
  quote: "You only live once, but if you do it right, once is enough.",
  author: "Mae West" },

{
  quote: "Be yourself; everyone else is already taken.",
  author: "Oscar Wilde" },

{
  quote:
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  author: "Albert Einstein" },

{ quote: "So many books, so little time.", author: "Frank Zappa" },
{
  quote: "A room without books is like a body without a soul.",
  author: "Marcus Tullius Cicero" },

{
  quote:
  "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  author: "J.K. Rowling" }];



const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const Text = props => {
  return /*#__PURE__*/React.createElement("div", { id: "text" }, props.text);
};

const Author = props => {
  return /*#__PURE__*/React.createElement("span", { id: "author" }, props.text);
};

const Tweet = props => {
  return /*#__PURE__*/(
    React.createElement("a", {
      id: "tweet-quote",
      className: "button",
      href: "https://www.twitter.com/intent/tweet".concat(props.tweet),
      target: "_blank" }, /*#__PURE__*/

    React.createElement("i", { className: "fab fa-twitter" })));


};

class Button extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",


    () => {
      console.log("Click happened in Button");
      this.props.handleClick();
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("button", { onClick: this.handleClick, type: "button", id: "new-quote" },
      this.props.children));


  }}


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",







    () => {
      console.log("Click handled by QuoteBox");
      let index = getRandomInt(quotes.length);
      do {
        index = getRandomInt(quotes.length);
      } while (
      this.state.quote === quotes[index].quote);

      this.setState(prevState => ({
        quote: quotes[index].quote,
        author: quotes[index].author }));

    });this.state = { quote: this.props.quote, author: this.props.author };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("blockquote", null, /*#__PURE__*/
      React.createElement(Text, { text: this.state.quote }), /*#__PURE__*/
      React.createElement("cite", null, /*#__PURE__*/
      React.createElement(Author, { text: this.state.author }))), /*#__PURE__*/



      React.createElement("div", { id: "action" }, /*#__PURE__*/
      React.createElement(Tweet, {
        tweet: encodeURI(
        "?hashtags=quotes&related=freeCodeCamp&text=".
        concat(this.state.quote).
        concat(" ").
        concat(this.state.author)) }), /*#__PURE__*/


      React.createElement(Button, { handleClick: this.handleClick }, "New quote"))));



  }}


class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(QuoteBox, {
        quote: "There is nothing better than a friend, unless it is a friend with chocolate.",
        author: "Linda Grayson" }));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Quote, null), document.getElementById("app"));