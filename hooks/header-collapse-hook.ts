import { useEffect } from 'react';

export const useNavCollapseHook = () => {
  useEffect(() => {
    document!.getElementById('nav-toggle')!.onclick = function () {
      document!.getElementById('nav-content')!.classList.toggle('hidden');
    };
  }, []);
};
