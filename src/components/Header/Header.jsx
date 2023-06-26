import React from 'react';
import styles from './Header.module.scss';

import { ReactComponent as MinimizeIcon } from '../../icons/chrome-minimize.svg';
import { ReactComponent as RestoreIcon } from '../../icons/chrome-restore.svg';
import { ReactComponent as CloseIcon } from '../../icons/chrome-close.svg';

function Header() {
  return (
    <header className={styles.section}>
      <div className={`flex items-center ${styles.top}`}>
        <div className={styles.wrap_left}>
          <img src="/images/header_icon.png" className="img-responsive" alt="로고" />
        </div>
        <div className={styles.wrap_menu}>
          <ul className={`flex ${styles.wrap_menu_list}`}>
            <li className={styles.wrap_menu_item}>파일(F)</li>
            <li className={styles.wrap_menu_item}>편집(E)</li>
            <li className={styles.wrap_menu_item}>선택 영역(S)</li>
            <li className={styles.wrap_menu_item}>보기(V)</li>
            <li className={styles.wrap_menu_item}>이동(G)</li>
            <li className={styles.wrap_menu_item}>실행(R)</li>
            <li className={styles.wrap_menu_item}>터미널(T)</li>
            <li className={styles.wrap_menu_item}>도움말(H)</li>
          </ul>
        </div>
        <div className={styles.wrap_right}>
          <ul className={styles.wrap_right_list}>
            <li className={styles.wrap_right_item}><MinimizeIcon className="chrome-close" /></li>
            <li className={styles.wrap_right_item}><RestoreIcon className="chrome-restore" /></li>
            <li className={styles.wrap_right_item}><CloseIcon className="chrome-close" /></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
