import axios from "axios";
export default axios.create({ 
  baseURL: "https://api.jsonbin.io/v3/b/692277c6d0ea881f40f9fbde/latest" 
}, headers: {
  "X-Master-Key": "$2a$10$cHUWN8iJGK.7M9ljLVOgl.3iGOQ4euuuxkqF9sBIkhBATsr3Bifv6",
});

