import { useEffect } from "react";

function useTitle(title) {
  useEffect(
    function () {
      document.title = `${title} - Headset ON`;
    },
    [title]
  );

  return null;
}

export default useTitle;
