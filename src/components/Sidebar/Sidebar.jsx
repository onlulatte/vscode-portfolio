import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';

import { ReactComponent as FilesIcon } from '../../icons/files.svg';
import { ReactComponent as ExtensionsIcon } from '../../icons/extensions.svg';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ReactComponent as SourceControlIcon } from '../../icons/source-control.svg';
import { ReactComponent as EllipsisIcon } from '../../icons/ellipsis.svg';
import { ReactComponent as ChevronRightIcon } from '../../icons/chevron-right.svg';
import { ReactComponent as ChevronDownIcon } from '../../icons/chevron-down.svg';
import { ReactComponent as FolderAudioIcon } from '../../icons/folder-audio.svg';
import { ReactComponent as FolderAudioOpenIcon } from '../../icons/folder-audio-open.svg';
import { ReactComponent as FolderControllerIcon } from '../../icons/folder-controller.svg';
import { ReactComponent as FolderControllerOpenIcon } from '../../icons/folder-controller-open.svg';
import { ReactComponent as FolderGlobalIcon } from '../../icons/folder-global.svg';
import { ReactComponent as FolderGlobalOpenIcon } from '../../icons/folder-global-open.svg';
import { ReactComponent as FolderimagesIcon } from '../../icons/folder-images.svg';
import { ReactComponent as FolderimagesOpenIcon } from '../../icons/folder-images-open.svg';

import { BrowserRouter, Link } from 'react-router-dom';

function Sidebar() {
  const [isActive, setIsActive] = useState("files");
  const handleIcon = (icon) => {
    setIsActive(icon);
  };

  const [isActiveExp, setIsActiveExp] = useState("profile");
  const handleExpIn = (icon) => {
    setIsActiveExp(icon);
  };
  const handleExpOut = (icon) => {
    setIsActiveExp(icon);
  };

  useEffect(() => {

  }, []);
  return (
    <aside className={styles.section}>
      <div className={styles.icons_container}>
        <ul className={styles.icons_wrapper}>
          <li className={`${styles.icon} ${isActive == "files" ? styles.active : ""}`} >
            <FilesIcon className="files" />
          </li>
          <li className={`${styles.icon} ${isActive == "search" ? styles.active : ""}`} onClick={() => handleIcon("search")}>
            <SearchIcon className="search" />
          </li>
          <li className={`${styles.icon} ${isActive == "source_control" ? styles.active : ""}`} onClick={() => handleIcon("source_control")}>
            <SourceControlIcon className="source_control" />
          </li>
          <li className={`${styles.icon} ${isActive == "extensions" ? styles.active : ""}`} onClick={() => handleIcon("extensions")}>
            <ExtensionsIcon className="extensions" />
          </li>
        </ul>
      </div>
      <div className={styles.explorer_container}>
        <div className={styles.explorer_wrapper}>
          <div className={`${styles.explorer_item} ${styles.explorer_top}`}>
            <div className={styles.explorer_head}>
              <h2>탐색기</h2>
              <div>
                <EllipsisIcon className="ellipsis" />
              </div>
            </div>
          </div>
          <div className={`${styles.explorer_item} ${styles.explorer_project}`}>
            <Link to="/">
              <div className={styles.explorer_head}>
                <div className="mr-5">
                  <ChevronDownIcon className="chevron_down" />
                </div>
                <h2>1. REACT</h2>
              </div>
            </Link>
            <div className={styles.explorer_body}>
              <ul className={styles.explorer_list}>
                <li className={`${isActiveExp == "profile" ? styles.active : ""}`}>
                  <div className={`${styles.explorer_list_item}`} onClick={(e) => {isActiveExp == "profile" ? handleExpIn() : handleExpIn("profile");}}>
                    {isActiveExp == "profile" ? (<ChevronDownIcon className="chevron_down" />) : (
                      <ChevronRightIcon className="chevron_right" />
                    )}
                    <div className="mr-5">
                      {isActiveExp == "profile" ? (<FolderAudioOpenIcon className="folder-admin" />) : (
                        <FolderAudioIcon className="folder-admin" />
                      )}
                    </div>
                  <span>profile</span>
                  </div>
                  <ul className={styles.explorer_2depth_list}>
                    <li className={styles.explorer_2depth_item}>
                      <Link to="/profile">
                        <ChevronRightIcon className="chevron_right" />
                        <div className="mr-5">
                          <span>KANG_JI_WOON.html</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${styles.explorer_list_item} ${isActiveExp == "portfolio" ? styles.active : ""}`} onClick={() => isActiveExp == "portfolio" ? handleExpIn() : handleExpIn("portfolio")}>
                  {isActiveExp == "portfolio" ? (<ChevronDownIcon className="chevron_down" />) : (
                    <ChevronRightIcon className="chevron_right" />
                  )}
                  <div className="mr-5">
                    {isActiveExp == "portfolio" ? (<FolderControllerOpenIcon className="folder-controller" />) : (
                      <FolderControllerIcon className="folder-controller" />
                    )}
                  </div>
                  <span>portfolio</span>
                </li>
                <li className={`${styles.explorer_list_item} ${styles.explorer_top} ${isActiveExp == "career" ? styles.active : ""}`} onClick={() => isActiveExp == "career" ? handleExpIn() : handleExpIn("career")}>
                  {isActiveExp == "career" ? (<ChevronDownIcon className="chevron_down" />) : (
                    <ChevronRightIcon className="chevron_right" />
                  )}
                  <div className="mr-5">
                    {isActiveExp == "career" ? (<FolderGlobalOpenIcon className="folder-global" />) : (
                      <FolderGlobalIcon className="folder-global" />
                    )}
                  </div>
                  <span>career</span>
                </li>
                <li className={`${styles.explorer_list_item} ${styles.explorer_top} ${isActiveExp == "src" ? styles.active : ""}`} onClick={() => isActiveExp == "src" ? handleExpIn() : handleExpIn("src")}>
                  {isActiveExp == "src" ? (<ChevronDownIcon className="chevron_down" />) : (
                    <ChevronRightIcon className="chevron_right" />
                  )}
                  <div className="mr-5">
                    {isActiveExp == "src" ? (<FolderimagesOpenIcon className="folder-images" />) : (
                      <FolderimagesIcon className="folder-images" />
                    )}
                  </div>
                  <span>src</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
