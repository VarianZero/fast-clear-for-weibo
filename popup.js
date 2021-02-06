let clearBtn = document.getElementById('clearAllFollow');

clearBtn.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: clearAll
    });
  });
};

function clearAll() {
  if (/weibo.com[\w\d]*follow/.test(window.location.href)) {
    document.querySelector(".btn_link.S_txt1").click();
    document.querySelectorAll('.member_li').forEach(l => l.click());
    document.querySelector('.W_btn_a[node-type="cancelFollowBtn"]').click();
    document.querySelector('[node-type="ok"]').click();
  } else {
    alert('请在微博管理关注页面使用');
  }
}