import React from 'react';
import styles from './Main.module.scss';

function Main() {
  return (
    <section className={`${styles.section} editor_section`}>
      <div className={`${styles.text} d2coding`}>
        <p>&lt;!<span className="red-color">DOCTYPE </span> <span className="orange-color">html</span>&gt;</p>
        <p>&lt;<span className="red-color">html</span> <span className="orange-color">lang</span>=<span className="green-color">"ko"</span>&gt;</p>
        <p>&lt;<span className="red-color">head</span>&gt;</p>
        <p className="ml-20">&lt;<span className="red-color">meta</span> <span className="orange-color">charset</span>=<span className="green-color">"UTF-8"</span>&gt;</p>
        <p className="ml-20">&lt;<span className="red-color">meta</span> <span className="orange-color">name</span><span className="green-color">="viewport"</span> <span className="orange-color">content</span>=<span className="green-color">"width=device-width, initial-scale=1.0"</span>&gt;</p>
        <p className="ml-20">&lt;<span className="red-color">title</span>&gt;JiWoon Portfolio&lt;/<span className="red-color">title</span>&gt;</p>
        <p>&lt;/<span className="red-color">head</span>&gt;</p>
        <p>&lt;<span className="red-color">body</span>&gt;</p>

        <div className="ml-20">
          &lt;<span className="red-color">dl</span>&gt;
          <div className="ml-20">
            <div>&lt;<span className="red-color">dt</span>&gt;소개&lt;/<span className="red-color">dt</span>&gt;</div>
            <div>&lt;<span className="red-color">dd</span>&gt;안녕하세요. 항상 최선을 다하고 신뢰를 받는 동료가 되고 싶은 프론트엔드 개발자 강지운입니다. <br /> HTML, CSS, JavaScript, php, React 등의 기술을 다루며, 부족한 실력을 채우기 위해 지속적으로 역량을 강화하고 있습니다. <br /> 저는 첫 직장과 두번째 직장에서 웹퍼블리셔로 근무한 경험이 있습니다. <br /> 하지만 웹을 처음 배울 당시부터 JavaScript의 동적인 웹페이지 구현과 이벤트 핸들링에 매력을 느껴 <br /> 다른 언어보다 JavaScript를 깊게 공부하였고 <br /> 마침내 두번째 직장에서 php로 데이터를 처리하고 사용자 화면에 정적 및 동적으로 표현하는 작업을 수행하며 <br /> 결과적으로 디자인팀에서 개발팀으로 부서 이동 후 프론트엔드 개발자로 새출발하게 되었습니다.&lt;/<span className="red-color">dd</span>&gt;</div>
          </div>
        &lt;/<span className="red-color">dl</span>&gt;
        </div>

        <div className="ml-20">
          &lt;<span className="red-color">dl</span>&gt;
          <div className="ml-20">
            <div>&lt;<span className="red-color">dt</span>&gt;가치관&lt;/<span className="red-color">dt</span>&gt;</div>
            <div>&lt;<span className="red-color">dd</span>&gt;직장 생활 당시 제 목표는 한결 같았습니다. <br /> “모두에게 인정받는 일 잘하는 직원이 되자. 그러기 위해서는 내 주 업무인 코딩을 잘하면 된다.”는 생각이었습니다. <br /> 저에게 주어진 업무를 잘 처리하고, 나아가 주변의 다른 동료들도 살피면서 함께 문제를 해결해나갔기에 <br /> 일(코딩)적인 부분에서는 목표를 달성했다고 생각합니다. <br /> 그러나 이러한 생각은 3년차로 접어들던 2022년에 달라졌습니다. <br /> 서서히 사람과 사람, 소통의 중요성을 깨달아갔습니다. <br /> 지금 이 순간, 직장 생활에서 가장 중요한 것이 무엇이냐고 물어본다면 저는 사람이라고 대답하겠습니다. <br /> 이런 내용~ &lt;/<span className="red-color">dd</span>&gt;</div>
          </div>
        &lt;/<span className="red-color">dl</span>&gt;
        </div>

        <div className="ml-20">
          &lt;<span className="red-color">dl</span>&gt; {/* dl */}
          
          <div className="ml-20">
            <div>
              &lt;<span className="red-color">div</span>&gt; {/* div */}
                <div className="ml-20">
                  &lt;<span className="red-color">dt</span>&gt;HTML, CSS, SASS&lt;/<span className="red-color">dt</span>&gt;
                  <div>&lt;<span className="red-color">dd</span>&gt;HTML 구조를 이해하고, CSS Flex와 Grid 레이아웃을 활용하여 다양한 레이아웃을 구현하는 데 익숙합니다. <br /> SASS 전처리기를 사용해 소규모 프로젝트 여러 개를 성공적으로 수행한 경험이 있습니다.&lt;/<span className="red-color">dd</span>&gt;</div>
                </div>
              &lt;/<span className="red-color">div</span>&gt; {/* /div */}
            </div>
            <div>
              &lt;<span className="red-color">div</span>&gt; {/* div */}
                <div className="ml-20">
                  &lt;<span className="red-color">dt</span>&gt;JavaScript(ES6), jQuery&lt;/<span className="red-color">dt</span>&gt;
                  <div>&lt;<span className="red-color">dd</span>&gt;꾸준한 JavaScript 학습을  바탕으로, 주로 프레임워크가 없는 웹사이트 환경에서 개발과 유지보수 작업을 수행해 왔습니다. <br /> 필요에 따라 AJAX와 async/await를 적용하여 동적인 웹사이트를 개발할 수 있습니다.&lt;/<span className="red-color">dd</span>&gt;</div>
                </div>
              &lt;/<span className="red-color">div</span>&gt; {/* /div */}
            </div>
            <div>
              &lt;<span className="red-color">div</span>&gt; {/* div */}
                <div className="ml-20">
                  &lt;<span className="red-color">dt</span>&gt;PHP, MySQL&lt;/<span className="red-color">dt</span>&gt;
                  <div>&lt;<span className="red-color">dd</span>&gt;기초적인 이해를 바탕으로, 사용자의 상호작용에 따라 달라지는 동적인 웹사이트를 개발할 수 있습니다.  <br /> 예약 관리 기능, 회원 관리 기능, 게시판 관리 기능을 개발한 경험이 있으며  <br /> 입출금 관리 프로젝트에 참여하여 개발을 이끈 경험이 있습니다.&lt;/<span className="red-color">dd</span>&gt;</div>
                </div>
              &lt;/<span className="red-color">div</span>&gt; {/* /div */}
            </div>
            <div>
              &lt;<span className="red-color">div</span>&gt; {/* div */}
                <div className="ml-20">
                  &lt;<span className="red-color">dt</span>&gt;React&lt;/<span className="red-color">dt</span>&gt;
                  <div>&lt;<span className="red-color">dd</span>&gt;HTML & CSS -  &lt;/<span className="red-color">dd</span>&gt;</div>
                </div>
              &lt;/<span className="red-color">div</span>&gt; {/* /div */}
            </div>
            <div>
              &lt;<span className="red-color">div</span>&gt; {/* div */}
                <div className="ml-20">
                  &lt;<span className="red-color">dt</span>&gt;ETC&lt;/<span className="red-color">dt</span>&gt;
                  <div>&lt;<span className="red-color">dd</span>&gt;Github, Postman, Notion, Slack, 그누보드, WordPress 등을 다뤄본 경험이 있습니다.&lt;/<span className="red-color">dd</span>&gt;</div>
                </div>
              &lt;/<span className="red-color">div</span>&gt; {/* /div */}
            </div>
          </div>

          &lt;/<span className="red-color">dl</span>&gt; {/* /dl */}
        </div>

        <p>&lt;/<span className="red-color">body</span>&gt;</p>
        <p>&lt;/<span className="red-color">html</span>&gt;</p>
      </div>
    </section>
  );
}

export default Main;
