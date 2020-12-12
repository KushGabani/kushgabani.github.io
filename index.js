var sender_name = "";
handleMessageClick = function () {
    document.getElementById("coming-soon").style.display = "none";
    document.getElementById("leave-a-message").style.display = "none";
    document.getElementById("send-a-message").style.display = "block";
    document.getElementById("social-icon").style.marginTop = "-2rem";
};

handleSendClick = function () {
    mailto_link =
        "mailto:kushgabz2687@gmail.com?subject=Portfolio Inquiry&body=" +
        document.getElementById("message").value;
    console.log("mailto_link");
    window = window.open(mailto_link, "emailWindow");
};

handleMessageFocus = function () {
    sender_name = document.getElementById("name").value;
    document.getElementById("message").textContent =
        "Hello Kush,\n\nBest Regards,\n" + sender_name;
};
