(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const t of o.addedNodes)
          t.tagName === "LINK" && t.rel === "modulepreload" && n(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = s(e);
    fetch(e.href, o);
  }
})();
document.addEventListener("readystatechange", function () {
  this.readyState == "complete" &&
    setTimeout(() => {
      document.querySelector("#body").classList.remove("hidden"),
        (document.querySelector("#body").style.opacity = 1);
      const t = document.querySelector(".loader");
      (t.style.opacity = 0),
        setTimeout(() => {
          t.classList.add("hidden");
        }, 100);
    }, 300),
    document.getElementById("nav-toggler").addEventListener("click", () => {
      document.querySelector(".navbar").classList.toggle("active");
    }),
    document.getElementById("nav-toggler").addEventListener("click", () => {
      document.querySelector(".nav").classList.toggle("active");
    }),
    window.addEventListener("scroll", function () {
      window.scrollY > 100
        ? (document.querySelector(".navbar").classList.remove("fixed"),
          document.querySelector(".navbar").classList.add("sticky"))
        : (document.querySelector(".navbar").classList.add("fixed"),
          document.querySelector(".navbar").classList.remove("sticky"));
    });
  var s =
      "https://www.facebook.com/people/Naan-Point/100089922966252/?mibextid=ZbWKwL",
    n = "https://instagram.com/naan.point?igshid=ZDdkNTZiNTM=",
    e = "http://wa.me/+923175988140",
    o = document.querySelectorAll(".link");
  o.forEach((t) => {
    (t.target = "_blank"),
      t.classList.contains("fb")
        ? (t.href = s)
        : t.classList.contains("linkedin")
        ? (t.href = e)
        : t.classList.contains("insta") && (t.href = n);
  });
});
