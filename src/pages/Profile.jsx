import React from 'react';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <section className={styles.section}>
      <div className={`${styles.text} d2coding`}>
        <p>&lt;!<span className="red-color">DOCTYPE </span> <span className="orange-color">html</span>&gt;</p>
        <p>&lt;<span className="red-color">html</span> <span className="orange-color">lang</span>=<span className="green-color">"ko"</span>&gt;</p>
        <p>&lt;<span className="red-color">head</span>&gt;</p>
        <p className="ml-20">&lt;<span className="red-color">meta</span> <span className="orange-color">charset</span>=<span className="green-color">"UTF-8"</span>&gt;</p>
        <p className="ml-20">&lt;<span className="red-color">meta</span> <span className="orange-color">name</span><span className="green-color">="viewport"</span> <span className="orange-color">content</span>=<span className="green-color">"width=device-width, initial-scale=1.0"</span>&gt;</p>
        <p className="ml-20">&lt;<span className="red-color">title</span>&gt;Kang Ji Woon Portfolio - 2023.07&lt;/<span className="red-color">title</span>&gt;</p>
        <p>&lt;/<span className="red-color">head</span>&gt;</p>
        <p>&lt;<span className="red-color">body</span>&gt;</p>

        <div className="ml-20">
          <div className={styles['text-indent']}>
            <p>&lt;<span className="red-color">p</span>&gt;안녕하세요. 사랑과 신뢰를 받는 동료가 되고 싶은 프론트엔드 개발자 강지운입니다.</p>
            <p>저는 2년 6개월의 웹퍼블리셔 경험과 1년 6개월의 프론트엔드 개발 경험을 가지고 있습니다.</p>
            <p>주로 HTML, CSS, JavaScript, PHP, React 등의 기술을 다루며 오늘도 역량을 강화하고 있습니다.</p>
            <p>저는 첫 직장에서 웹의 기본과 실무를 배우고, 두 번째 직장에 ㅡㅜ\서 나아가 웹개발을 배웠습니다.</p>
            <p>다음 직장에서는 무엇을 배우게 될까요?</p>
            <p>저와 함께 하고 싶으시거나 저에게 관심이 있는 분들은 언제든지 연락 주시면 감사하겠습니다.</p>
            <p>저는 항상 배우고 성장하는 것을 좋아합니다. 정말로요!</p>
            <p>모르는 것을 이해하고 알아가는 과정은 어려울 수 있지만, 그것을 결국 습득하게 된다면 한 단계 성장할 수 있기 때문입니다.</p>

            <p>지난 웹퍼블리셔 2년 6개월, 그리고 개발팀으로 부서 이동하여 배운 1년 6개월 동안 저는 의외의 사실을 깨달았습니다.</p>
            <p>그것은 바로 커뮤니케이션의 중요성입니다.</p>
            <p>처음에 저는 몰랐습니다. “개발자가 개발만 잘하면 되지, 다른 것은 부가적인 요소가 아니야?”</p>
            <p>하지만 이제는 알고 있습니다. 개발자에게 업무를 요청하는 것도 사람이고 개발된 작업물을 </p>

            <p>&lt;/<span className="red-color">p</span>&gt;</p>
          </div>
        </div>

        <p>&lt;/<span className="red-color">body</span>&gt;</p>
        <p>&lt;/<span className="red-color">html</span>&gt;</p>
      </div>
    </section>
  );
}

export default Profile;
