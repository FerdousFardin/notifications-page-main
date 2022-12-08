const data = [
  {
    isRead: false,
    img: "assets/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    action: "reacted to your recent post",
    message: "My first tournament today!",
    time: "1m",
  },
  {
    isRead: false,
    img: "assets/images/avatar-angela-gray.webp",
    name: "Angela Gray",
    action: "followed you",
    message: "",
    time: "5m",
  },
  {
    isRead: false,
    img: "assets/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    action: "has joined their group",
    message: "Chess Club",
    time: "1 day",
  },
  {
    isRead: true,
    img: "assets/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    content:
      "<div class=\"private-message\">Hello, thanks for setting up the Chess Club. I've been a member for a <br /> few weeks now and I'm already having a lots of fun and improving my<br /> game.</div>",
    time: "5 days",
  },
  {
    isRead: true,
    img: "assets/images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    action: "commented on your picture",
    content: `<img class="user-img" src="assets/images/image-chess.webp" alt="chess-image" />`,
    time: "1 week",
  },
  {
    isRead: true,
    img: "assets/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    message: "5 end-game strategies to increase your win rate",
    time: "2 weeks",
  },
  {
    isRead: true,
    img: "assets/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    action: "left the group",
    message: "Chess Club",
    time: "2 weeks",
  },
];

const contentWrapper = document.querySelector(".content-wrapper");
function loadData() {
  contentWrapper.innerHTML = "";
  const unreadTotal = data.filter((e) => !e.isRead);
  document.querySelector(".badge").textContent = unreadTotal.length || 0;
  data.forEach((info) => {
    const content = document.createElement("div");
    content.classList.add("content");
    if (!info.isRead) content.classList.add("content-unread");
    content.innerHTML = `
              <img src="${info.img}" alt="${info.name}" />
              <div class="">
                <p class="content-text ${
                  !info.isRead ? "content-text-unread" : ""
                }">
                  <span class="content-of"> ${info.name || ""} </span>
                  <span class="content-action">
                   ${info.action}
                  </span>
                  <span class="content-message"> ${info.message || ""}</span>
                </p>
                <p class="content-time">${info.time} ago</p>
                ${info.content ? info.content : ""}
              </div>`;
    contentWrapper.appendChild(content);
  });
}
loadData();
function markAsRead() {
  data.forEach((info) => {
    info.isRead = true;
  });
  loadData();
}
