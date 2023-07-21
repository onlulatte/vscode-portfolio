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

import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const [isActive, setIsActive] = useState("files");
  const handleIcon = (icon) => {
    setIsActive(icon);
  };

  const [isActiveExp, setIsActiveExp] = useState("profile");
  const handleExpIn = (icon) => {
    setIsActiveExp(icon);
  };
  
  const location = useLocation();
  
  return (
    <aside className={styles.section}>
      <div className={styles.icons_container}>
        <ul className={styles.icons_wrapper}>
          <li className={`${styles.icon} ${isActive == "files" ? styles.active : ""}`} onClick={() => handleIcon("files")}>
            <Link to="/"><FilesIcon className="files" /></Link>
          </li>
          <li className={`${styles.icon} ${isActive == "search" ? styles.active : ""}`} onClick={() => handleIcon("search")}>
            <Link to="/portfolio"><SearchIcon className="search" /></Link>
          </li>
          <li className={`${styles.icon} ${isActive == "source_control" ? styles.active : ""}`} onClick={() => handleIcon("source_control")}>
            <Link to="#"><SourceControlIcon className="source_control" /></Link>
          </li>
          <li className={`${styles.icon} ${isActive == "extensions" ? styles.active : ""}`} onClick={() => handleIcon("extensions")}>
            <Link to="#"><ExtensionsIcon className="extensions" /></Link>
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
                          <span>Jiwoon.html</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${isActiveExp == "portfolio" ? styles.active : ""}`}>
                  <div className={`${styles.explorer_list_item}`} onClick={(e) => {isActiveExp == "portfolio" ? handleExpIn() : handleExpIn("portfolio");}}>
                    {isActiveExp == "portfolio" ? (<ChevronDownIcon className="chevron_down" />) : (
                      <ChevronRightIcon className="chevron_right" />
                    )}
                    <div className="mr-5">
                      {isActiveExp == "portfolio" ? (<FolderControllerOpenIcon className="folder-controller" />) : (
                        <FolderControllerIcon className="folder-controller" />
                      )}
                    </div>
                    <span>portfolio</span>
                  </div>
                  <ul className={styles.explorer_2depth_list}>
                    <li className={`${styles.explorer_2depth_item} ${location.pathname == "/portfolio" ? styles.active : ""}`}>
                      <Link to="/portfolio">
                        <ChevronRightIcon className="chevron_right" />
                        <div className="mr-5">
                          <span>portfolio.html</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${isActiveExp == "career" ? styles.active : ""}`}>
                  <div className={`${styles.explorer_list_item}`} onClick={(e) => {isActiveExp == "career" ? handleExpIn() : handleExpIn("career");}}>
                    {isActiveExp == "career" ? (<ChevronDownIcon className="chevron_down" />) : (
                      <ChevronRightIcon className="chevron_right" />
                    )}
                    <div className="mr-5">
                      {isActiveExp == "career" ? (<FolderGlobalOpenIcon className="folder-controller" />) : (
                        <FolderGlobalIcon className="folder-controller" />
                      )}
                    </div>
                    <span>resume</span>
                  </div>
                  <ul className={styles.explorer_2depth_list}>
                    <li className={`${styles.explorer_2depth_item} ${location.pathname == "/resume" ? styles.active : ""}`}>
                      <Link to="/resume">
                        <ChevronRightIcon className="chevron_right" />
                        <div className="mr-5">
                          <span>resume.php</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
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
