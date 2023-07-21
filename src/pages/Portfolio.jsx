import { useState } from 'react';
import styles from './Portfolio.module.scss';
import { useNavigate } from "react-router-dom";

function ProjectCard({ image, title, description, techs, onClick }) {
  const [isActive, setIsActive] = useState(false);
  const handleCardClick = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    onClick(newIsActive);
  };

  return (
    <div className={`${styles['col-6']} ${isActive ? styles.active : ''}`}>
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.card_head}>
          <img src={image} className={`${styles.card_head_img} img-responsive`} alt={title} />
        </div>
        <div className={styles.card_body}>
          <h5 className={styles.card_title}>{title}</h5>
          <p className={styles.card_text}>{description}</p>
          <div className={styles.label}>
            {techs.map((tech, index) => (
              <span key={index} className={styles.label_item}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [isRowActive, setIsRowActive] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (isActive, path) => {
    setIsRowActive(isActive);
    setTimeout(() => {
      navigate("/" + path);
    }, 3000);
  };

  return (
    <section className={`${styles.section} editor_section`}>
      <div className={`${styles.row} ${isRowActive ? styles.active : ''}`}>
        <ProjectCard 
          image="/images/coinbox_thumb.jpg"
          title="프로젝트 - 코인박스"
          description="코인박스는 암호화폐 거래소 가입 및 거래, 송금 등을 대행하는 업체입니다."
          techs={["Javascript", "php"]}
          onClick={() => handleCardClick(true, "coinbox")}
        />
        <ProjectCard 
          image="/images/mprmedia_thumb.jpg"
          title="프로젝트 - 엠피알 영상홍보 홈페이지"
          description="날이 갈수록 영상 콘텐츠는 많아지고, 소비자의 눈은 더더욱 높아집니다. 엠피알은 다양한 영상 제작 경험을 통해 얻은 노하우로 영상 전문 컨설턴트로 거듭나는 업체입니다."
          techs={["Javascript", "php", "그누보드"]}
          onClick={() => handleCardClick(true, "mprmedia")}
        />
        <ProjectCard 
          image="/images/diplomat_thumb.jpg"
          title="프로젝트 - 디프로매트 쇼핑몰"
          description="부산을 근거지로 한 금고제작회사로 2022년 기준 80여개국에 수출하고 있습니다."
          techs={["Javascript", "php", "그누보드"]}
          onClick={() => handleCardClick(true, "diplomat")}
        />
        <ProjectCard
          image="/images/mprcms_thumb.jpg"
          title="프로젝트 - 엠피알 CMS"
          description="php pdo 방식을 사용한 자체제작 CMS입니다. 회원관리, 게시판관리, 예약관리, 방문자통계관리, 소셜로그인 등의 기능을 지원합니다."
          techs={["Javascript", "php", "그누보드"]}
          onClick={() => handleCardClick(true, "mprcms")}
        />
        <ProjectCard
          image="/images/deposit_thumb.jpg"
          title="프로젝트 - 엠피알 입금관리 시스템"
          description=""
          techs={["Javascript", "php", "그누보드"]}
          onClick={() => handleCardClick(true, "deposit")}
        />
      </div>
    </section>
  );
}

export default Portfolio;
