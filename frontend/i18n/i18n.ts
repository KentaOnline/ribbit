import i18next from "i18next";

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: "en", // "en" | "zh"
  resources: {
    en: {
      translation: {
        "general/by-trend": "By trend",
        "general/by-time": "By time",
        "general/follow": "Follow",
        "general/following": "Following",
        "general/unfollow": "Unfollow",
        "general/invalid-topic": "Invalid topic",
        "general/upvoted": "upvoted",
        "general/Write-below": "Write below",
        "general/Preview": "Preview",
        "general/Reply-to": "Reply to",
        "general/Post-to-topics": "Post to topics",
        "general/Reply-to-the-following-users": "Reply to the following users",
        "general/Mention-the-following-users": "Mention the following users",
        "general/Configuration": "Configuration",
        "general/Repost-to-timeline": "Repost to timeline",
        "general/Post-to-ribbit": "Post to #{ribbit} topic",
        "general/Post-as-IPFS-hash": "Post as IPFS hash",
        "components/error/feed-footer-part1": "Please make sure",
        "components/error/feed-footer-part2":
          "is running and unlocked in your browser.",
        "components/header/home": "Home",
        "components/header/topics": "Topics",
        "components/header/notifications": "Notifications",
        "components/header/settings": "Settings",
        "components/header/search-box-placeholder":
          "Enter @username here or #topic that you are interested. ",
        "components/followings-card/title": "my followings",
        "components/topics-card/title": "my favorite topics",
        "app/error":
          "Failed to initialize Ribbit. Please make sure you have MetaMask enabled and unlocked."
      }
    },
    zh: {
      translation: {
        "general/by-trend": "按热度",
        "general/by-time": "按时间",
        "general/follow": "关注",
        "general/following": "正在关注",
        "general/unfollow": "取消关注",
        "general/invalid-topic": "无效的话题",
        "general/upvoted": "赞同了",
        "general/Write-below": "编辑",
        "general/Preview": "预览",
        "general/Reply-to": "回复",
        "general/Post-to-topics": "发布到话题",
        "general/Reply-to-the-following-users": "回复给以下用户",
        "general/Mention-the-following-users": "提到一下用户",
        "general/Configuration": "发布设置",
        "general/Repost-to-timeline": "转发到个人主页",
        "general/Post-to-ribbit": "发布到 #{ribbit} 话题",
        "general/Post-as-IPFS-hash": "发布为 IPFS 哈希",
        "components/error/feed-footer-part1": "请确保",
        "components/error/feed-footer-part2": "在你的浏览器中工作并解锁。",
        "components/header/home": "首页",
        "components/header/topics": "话题",
        "components/header/notifications": "消息",
        "components/header/settings": "设置",
        "components/header/search-box-placeholder":
          "请在这里输入 @用户名 或者你感兴趣的 #话题。",
        "components/followings-card/title": "我关注的人",
        "components/topics-card/title": "我关注的话题",
        "app/error": "启动 Ribbit 失败。请确保 MetaMask 已启动并解锁。"
      }
    }
  }
});

window["i18n"] = i18next;
export default i18next;