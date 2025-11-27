function MenuIcon() {
  return (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2H.5m13 5H.5m13 5H.5"/>
    </svg>
  )
}

function BackIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="#000000" d="m13.28 6.78l-8.5 8.5l-.686.72l.687.72l8.5 8.5l1.44-1.44L7.936 17H28v-2H7.937l6.782-6.78l-1.44-1.44z"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
      <path fill="#000000" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
      <path fill="#000000" d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"/>
    </svg>
  )
}

export { MenuIcon, BackIcon, SearchIcon, CommentIcon };