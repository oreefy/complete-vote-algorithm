const createElement = (Position, Name, Id, Class, Text, value) => {
  const parent = document.getElementById(Position);
  let element = document.createElement(Name);
  Id ? element.setAttribute("id", Id) : "";
  value ? element.setAttribute("value", value) : "";
  Class ? (element.classList = Class) : "";
  Text ? (element.innerText = Text) : "";
  parent.appendChild(element);
};

const createCandidate = (Id, Name, Brand) => {
  createElement(
    "profile",
    "div",
    Id,
    "col bg-primary text-white rounded p-4 mx-2"
  );
  createElement(Id, "h2", "", "h4", Name);
  createElement(Id, "hr");
  createElement(Id, "p", "", "", Brand);
};

const createWinVoter = (Name) => {
  createElement("winVoter", "li", "", "", Name);
};

const voteCandidate = (name, brand) => {
  createElement("voterCandidate", "option", "", "", `${name} (${brand})`, name);
};
