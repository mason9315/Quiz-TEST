document.addEventListener('DOMContentLoaded', function() {
    // 엑셀에서 가져온 질문, 점수, 정답 데이터를 설정합니다.
    const questions = [
        'Q1. Fit Map에 관한 설명으로 옳지 않은 것은? (2.5점)',
        'Q2. Fur재질에 Fur Gradation Color를 적용했을 때 경계를 자연스럽게 하는 속성의 이름은? (2점)',
        'Q3. CLO에서 제공하는 Fit map의 종류가 아닌 것은? (2점)',
        'Q4. Trim을 의상에 붙일 때 사용하는 기능은? (2점)',
        'Q5. 안정적인 애니메이션 녹화를 하기 위한 고려 사항이 아닌 것은? (2점)',
        'Q6. 니트가 한번에 편직되는 것을 3D에서 표현 하는 방법은? (2점)',
        'Q7. 패턴의 메쉬를 더 작은 부분으로 분할하여 세밀한 주름을 만드는 기능은? (2점)',
        'Q8. 레이스 트림을 제작하는 방식이 틀린 것은? (2점)',
        'Q9. 아바타 세팅 시 유의 사항으로 옳지 않은 것은? (2점)',
        'Q10. DXF Export옵션이 아닌 것은? (2점)',
        'Q11. CLO에서 제공하는 Material Type이 아닌 것은? (2점)',
        'Q12. 소프트 바디 시뮬레이션 기능에 대한 설명 중 틀린 것은? (2점)',
        'Q13. 배경과 소품 및 렌더 속성까지 한 번에 저장할 수 있는 CLO 확장자는? (2점)',
        'Q14. New Modular Library에 대한 설명 중 틀린 것은? (2.5점)',
        'Q15. 카메라 애니메이션 모드에 대한 설명 중 틀린 것은? (2점)',
        'Q16. CLO의 배치판의 파일 형식은? (2점)',
        'Q17. Review Editor에 대한 설명으로 틀린 것은? (2.5점)',
        'Q18. ".zacs" 파일로 저장할 수 없는 아이템은? (2점)',
        'Q19. Seamline을 지나는 내부 도형을 생성할 때, 간편하게 양쪽 패턴에 내부 도형을 분리할 수 있는 기능의 이름은? (2점)',
        'Q20. 브러쉬로 메쉬를 선택하였을 때 부분적으로 적용할 수 없는 기능은? (2점)',
        'Q21. Roll up 할 때 사용하는 기능에 대한 설명이 아닌 것은? (2점)',
        'Q22. Elastic Preset에 대한 설명으로 맞는 것은? (2.5점)',
        'Q23. Auto Convert to Motion 기능에 대한 설명으로 틀린 것은? (2점)',
        'Q24. Fur Render 시 컬러가 탁하게 렌더 되는 경우 할 수 있는 해결 방법이 아닌 것은? (2점)',
        'Q25. Alvanon Dummy에 대한 내용 중 옳은 것은? (2점)',
        'Q26. Connect Store에서 판매되지 않는 아이템은? (2점)',
        'Q27. CLO-SET Workroom 내에서 할 수 있는 기능 중 맞지 않는 것은? (2점)',
        'Q28. CLO-SET Assortment Room 에서 이용할 수 있는 기능이 아닌 것은? (2점)',
        'Q29. CLO-SET Advanced Plan에서 부과 대상이 아닌 사람은? (2점)',
        'Q30. 실제 사람을 측정하여 CLO아바타를 만들 때, 올바르지 않은 측정 방법은? (2.5점)',
        'Q31. 패턴을 선택 할 때, 같은 속성 선택 기능을 적용 할 수 없는 것은? (2점)',
        'Q32. CLO 소프트웨어의 정식 명칭은 무엇인가요? (2점)',
        'Q33. 패턴 수정 작업을 할 때, 원본 패턴을 유지하기 위해 사용하는 기능으로 2d 패턴창에는 점선으로 외곽선 형태가 남아있지만, 3d창에서는 패턴이 보이지 않게 할 수 있는 기능의 이름은? (2점)',
        'Q34. Group의 관리자가 결제 및 User 사용량 현황 파악, 권한 관리 등을 볼 수 있는 메뉴의 이름은 무엇입니까? (2점)',
        'Q35. CLO-SET 3D Viewer 에서 원부자재 별 Color variation을 시도해보고 새로운 Colorway를 생성할 수 있는 기능 이름은? (2점)',
        'Q36. 외부 아바타를 CLO 아바타로 변환하여 사용 할 수 있는 기능의 이름은? (2점)',
        'Q37. CLO에서 텍스쳐가 적용된 상태에서 자동으로 노말맵을 생성할 수 있습니다. (1점)',
        'Q38. CLO에서는 지퍼 Teeth type만 OBJ Type으로 설정할 수 없습니다. (1점)',
        'Q39. 현재 다른 3D S/W에서 제작한 Custom OBJ를 CLO에서 탑 스티치로 등록할 수 없습니다. (1점)',
        'Q40. 애니메이션 녹화 중 일시 정지하여 시뮬레이션을 켜서 핀칭하고 나면, 다시 이어서 녹화를 진행할 수 있다. (1점)',
        'Q41. 스타일 라인 기능을 사용할 때 정확한 수치를 입력해서 수정할 수 있다 (1점)',
        'Q42. 의상 코디네이션을 할 때 의상의 착장이 불러오는 순서에도 관련이 있다. (1점)',
        'Q43. 의상 자동 저장이 된다. (1점)',
        'Q44. 포즈를 바꾸면서 의상을 실시간으로 시뮬레이션 할 수 있다. (1점)',
        'Q45. 바인딩은 over/under 만 선택하여 적용할 수 있고, over/under 를 동시에 적용할 수 없다. (1점)',
        'Q46. 의상을 아바타에 고정 할 수 있는 방법을 2가지 이상 서술하세요. (3.5점)',
        'Q47. Fabric Kit의 Thickness Gauge로 원단의 두께를 측정 할 때, 표면이 불규칙한 경우에는 어떻게 측정해야 하나요? (3점)',
        'Q48. 시뮬레이션 옵션 3가지의 차이점을 설명하시오. (3.5점)',
        'Q49. 원단의 재질 메뉴에는 다양한 Map을 적용할 수 있는 기능이 있습니다. 각 Map의 용도와 사용 방법을 설명하시오. (3점)',
        'Q50. CLO를 기업 프로세스의 어느 부분에 적용 할 수 있나요? (3.5점)'
    ];

    const scores = [
        2.5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
        2, 2, 2, 2.5, 2, 2, 2.5, 2, 2, 2, 
        2, 2.5, 2, 2, 2, 2, 2, 2, 2, 2.5, 
        2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 
        1, 1, 1, 1, 1, 1, 3.5, 3, 3.5, 3.5
    ];

    const answers = [
        '의상 핏 맵은 아바타를 기준으로 계산 하기 때문에, 의상에 작용하는 압력이 아닌 아바타에 가해지는 압력을 나타냅니다.',
        'Interpolation',
        'Stretch Map(신축성 분포)',
        'Glue',
        'Particle Distance의 값을 5로 설정합니다.',
        '재봉선 노말맵 삭제',
        'Shrring(셔링)',
        '레이스의 엠보싱 부분은 Displacement map에서 검은 영역으로 지정합니다.',
        '실제 모델 측정 시 CLO아바타와 동일한 Attention Pose로 사이즈를 측정해야 합니다.',
        '패턴 재배치',
        'Sequin',
        '소프트 바디 시뮬레이션 적용 후 사이즈 조정이 가능하다.',
        '.ZSE',
        'Style을 New Modular에 등록하기 위해서는 Modular Mode에서 등록해야 한다.',
        '해당 기능은 아바타에 모션이 적용된 상태에서만 사용할 수 있다.',
        'pan',
        '한 번에 모든 사이즈를 시뮬레이션하는 것이 한 사이즈씩 개별로 시뮬레이션하는 것이 보다 빠릅니다.',
        '가방',
        'Divide Over Seam Line',
        '비활성화',
        'Roll up은 2번까지 가능하다',
        'Elastic은 적용한 패턴의 위사 방향에만 적용되므로, 패턴의 식서가 Elastic 방향에 수직이어야 합니다.',
        '외부 플랫폼의 모션은 Alembic으로 저장한 후 가져오기 해야 한다.',
        'Shape-Taper 값 조절',
        'CLO에서 배치 포인트를 생성할 수 있다.',
        'Motion',
        'Content 통계, Brand 통계를 확인할 수 있다.',
        'Web Tech pack',
        'Viewer',
        '[Detail] Waist - 허리의 중간 지점을 수평으로 둘레 측정',
        '레이어',
        'CLO',
        '아카이브(Archive)',
        'Admin Console',
        'Configurator',
        'Auto Convert to Avatar(아바타로 자동 변환)',
        'O',
        'X',
        'X',
        'O',
        'O',
        'X',
        'O',
        'O',
        'X',
        '의상에 핀을 생성 후 우클릭하여, Attach Pin to Avatar 메뉴를 선택하여 아바타에 붙여 고정할 수 있습니다. 다른 방법으로는 아바타에 Basic Tap Measure(Avatar) 기능으로 의상을 고정할 부분에 선분을 생성 후, Attach to Measure(Avatar) 기능을 선택하여 생성한 선분에 고정할 의상 패턴의 내부선분 혹은 외곽선을 선택하여 고정할 수 있습니다.',
        '두께가 가장 낮은 부분과 높은 부분을 모두 측정하여, 측정한 두 값의 평균값을 두께값으로 계산합니다.',
        'Fast (GPU) : 시뮬레이션 사전 설정값을 GPU로 설정하면 컴퓨터 그래픽 카드 사양에 따라서 시뮬레이션 속도가 향상될 수 있습니다.\nNormal (Default) : 시뮬레이션 사전 설정값을 기본으로 설정하면 시뮬레이션 속도가 빨라 의상 작업 시 효율적입니다.\nFitting (Accurate Fabric) : 시뮬레이션 사전 설정 값을 정교한 원단 물성 계산으로 설정하면 시뮬레이션이 안정적이면서 원단의 늘어나는 정도가 실제와 같이 표현됩니다.',
        'Texture : 원단의 표면 재질감을 표현할 수 있습니다.\nNormal map : 이미지에 음영을 주어 소재 질감을 조금 더 입체적인 느낌으로 표현할 수 있습니다.\nDisplacement map : 그래픽의 두께 및 원단의 울퉁불퉁한 재질감을 표현합니다. 디스플레이스먼트 맵은 무채색으로 구성된 맵이며, 회색\nRoughness map : 원단에 적용된 정반사 색상에 텍스처를 넣어서 다양한 광택의 원단을 표현할 수 있습니다.\nFur - Base map : 하나의 패턴에서 길이, 두께, 그리고 밀도 차이를 표현할 수 있습니다.',
        'CLO는 기업의 다양한 워크 프로세스에서 활용이 가능합니다.\n크게는 하단의 6 단계에서 기업들이 CLO를 활용하고 있습니다.\n\n1. 샘플 제작 \n  - 패턴사가 디자이너에게 도식화를 받은 후 패턴을 제작하게 됩니다. 이 후 디자인 의도와 맞게 반영될 때까지 샘플 수정 작업을 여러 번 거치게 되는데 이 과정에서 3D를 통하여 비용 절감 및 시간을 단축시킬 수 있습니다.\n  - 피팅 측정 : 대부분의 고객들은 발란스 체크와 프로토타입 샘플 단계에서 CLO를 사용하고 있습니다. FIT SAMPLE 단계까지 사용하기에 다양한 사례와 경험이 현재로서는 부족하고 CLO가 실제 봉재 공정을 전부 표현 가능하거나 물성이 100%의 정확성을 가지고 있지 않기 때문에 완벽히 FIT SAMPLE을 대체할 수 있다고 말씀드리기는 조심스럽습니다. 하지만 다음 단계로 발전하기 위해 내부에서는 많은 연구들이 진행되고 있으며, 실제 공정에 필요한 기능들도 차근차근 개발되고 있습니다.\n2. 디자인 품평 \n  - 코디네이션, 컬러 베리에이션 및 포켓 위치나 기장 수정 등 빠른 디자인 수정에 용이합니다.\n3. 커뮤니케이션/ 원거리 품평 \n  - 수출업체 커뮤니케이션 비용 절감, 멀리 떨어져 있는 사람들과 온라인으로 품평 시에 활용할 수 있습니다.\n4. 마케팅 \n  - 가상 패션쇼, 쇼룸 구성, 모션 등을 통한 마케팅에 이용할 수 있습니다.\n5. 가상 피팅 \n  - 사용자가 실제 의상 구매 전 온라인에서 의상을 입어보는 경험을 할 수 있습니다.\n6. 프리(pre) 마케팅 \n  - 실의상 대량 생산 전 온라인에 가상 의상을 올려 인기도를 미리 예측할 수 있습니다.'
    ];

    // 주관식 여부를 구분하는 리스트: O/X 형태면 false, 주관식이면 true
    const isShortAnswer = answers.map(answer => !(answer === 'O' || answer === 'X'));

    let totalScore = 0;
    const quizContainer = document.getElementById('quiz-container');

    // 각 질문과 답변을 동적으로 생성
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Q${index + 1}. ${question}`;
        questionDiv.appendChild(questionText);

        // 주관식인지 O/X형인지 확인 후 입력 형태 선택
        if (isShortAnswer[index]) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.id = `input-${index}`;
            questionDiv.appendChild(inputField);

            const submitButton = document.createElement('button');
            submitButton.textContent = '제출';
            submitButton.onclick = () => checkShortAnswer(index);
            questionDiv.appendChild(submitButton);
        } else {
            const buttonO = document.createElement('button');
            buttonO.textContent = 'O';
            buttonO.onclick = () => checkAnswer(index, 'O', answers[index] === 'O');
            questionDiv.appendChild(buttonO);

            const buttonX = document.createElement('button');
            buttonX.textContent = 'X';
            buttonX.onclick = () => checkAnswer(index, 'X', answers[index] === 'X');
            questionDiv.appendChild(buttonX);
        }

        const resultElement = document.createElement('p');
        resultElement.id = `result-${index}`;
        questionDiv.appendChild(resultElement);

        quizContainer.appendChild(questionDiv);
    });

    // O/X형 정답을 확인하는 함수
    function checkAnswer(index, userAnswer, isCorrect) {
        const resultElement = document.getElementById(`result-${index}`);
        if (isCorrect) {
            resultElement.textContent = '정답입니다!';
            resultElement.style.color = 'green';
            totalScore += scores[index];
        } else {
            resultElement.textContent = `오답입니다! 정답: ${answers[index]}`;
            resultElement.style.color = 'red';
        }
    }

    // 주관식 정답을 확인하는 함수
    function checkShortAnswer(index) {
        const inputField = document.getElementById(`input-${index}`);
        const userAnswer = inputField.value.trim();
        const resultElement = document.getElementById(`result-${index}`);

        if (userAnswer.toLowerCase() === answers[index].toLowerCase()) {
            resultElement.textContent = '정답입니다!';
            resultElement.style.color = 'green';
            totalScore += scores[index];
        } else {
            resultElement.textContent = `오답입니다! 정답: ${answers[index]}`;
            resultElement.style.color = 'red';
        }
    }

    // Google Apps Script로 결과를 제출하는 함수
    function submitResults(name, score) {
        const url = 'https://script.google.com/macros/s/AKfycbx8NmZZm9YzeAx86J2jNG_iXn7JJ_C7c25KZ0ooCydh5mtkuS8pPe2BRQYc-Jf36EU/exec'; // Google Apps Script에서 생성된 API URL
        const data = {
            name: name,
            score: score
        };

        fetch(url, {
            method: 'POST',
            mode: 'no-cors', // CORS 문제를 해결하기 위한 설정
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            console.log('결과가 성공적으로 제출되었습니다.');
        })
        .catch(error => {
            console.error('오류 발생:', error);
        });
    }

    // 총 점수를 표시하고, 결과를 전송하는 함수
    function showScore() {
        const finalScoreElement = document.getElementById('final-score');
        finalScoreElement.textContent = `총 점수: ${totalScore}점`;

        const userName = prompt("이름을 입력해주세요");
        submitResults(userName, totalScore);
    }

    const resultButton = document.createElement('button');
    resultButton.textContent = '결과 확인';
    resultButton.onclick = showScore;
    document.body.appendChild(resultButton);
});

