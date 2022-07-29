const profiles = [];
const loadProfiles = () => {
  if (profiles.length) {
    createCandidate(
      `${Math.random()}`,
      profiles[profiles.length - 1].name,
      profiles[profiles.length - 1].brand
    );
    voteCandidate(
      profiles[profiles.length - 1].name,
      profiles[profiles.length - 1].brand
    );
  }
};

document.getElementById("create").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const brand = document.getElementById("brand").value;
  profiles.push({ name: name, brand: brand, vote: 0, voter: [] });
  loadProfiles();
});

document.getElementById("register").addEventListener("click", () => {
  const name = document.getElementById("voterName").value;
  const candidate = document.getElementById("voterCandidate").value;
  profiles.map((profile) => {
    if (profile.name === candidate) {
      profile.vote = profile.vote + 1;
      profile.voter.push({ name: name });
    }
  });
});

const finalResult = () => {
  const winner = { index: null, vote: null };

  profiles.map((profile, index) => {
    if (profile.vote >= winner.vote) {
      winner.index = index;
      winner.vote = profile.vote;
    }
  });

  document.getElementById("winName").innerHTML = profiles[winner.index].name;
  document.getElementById("winVote").innerHTML =
    profiles[winner.index].voter.length;
  profiles[winner.index].voter.map((element) => {
    createWinVoter(element.name);
  });
};
document.getElementById("result").addEventListener("click", () => {
  document.getElementById("winBox").classList = "d-block";
  finalResult();
});
document.getElementById("winClear").addEventListener("click", () => {
  window.location.reload(true);
});
