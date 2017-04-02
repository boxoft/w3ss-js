(function () {
    var button = document.getElementsByTagName('button')[0],
        destroyAll = document.getElementById('destroy-all'),
        passage = document.getElementById('passage'),
        analects = [
            '学而第一（主要讲“务本”的道理，引导初学者进入“道德之门”）',
            '为政第二（主要讲治理国家的道理和方法）',
            '八佾第三（主要记录孔子谈论礼乐）',
            '里仁第四（主要讲仁德的道理）',
            '公冶长第五（主要讲评价古今人物及其得失）',
            '雍也第六（记录孔子和弟子们的言行）',
            '述而第七（主要记录孔子的容貌和言行）',
            '泰伯第八（主要记孔子和曾子的言论及其对古人的评论）',
            '子罕第九（主要记孔子言论，重点为孔子的行事风格，提倡和不提倡做的事）',
            '乡党第十（主要记录孔子言谈举止，衣食住行和生活习惯）',
            '先进第十一（主要记录孔子教育言论和对其弟子的评论）',
            '颜渊第十二（主要讲孔子教育弟子如何实行仁德，如何为政和处世）',
            '子路第十三（主要记录孔子论述为人和为政的道理）',
            '宪问第十四（主要记录孔子和其弟子论修身为人之道，以及对古人的评价）',
            '卫灵公第十五（主要记录孔子及其弟子在周游列国时的关于仁德治国方面的言论）',
            '季氏第十六（主要记孔子论君子修身，以及如何用礼法治国）',
            '阳货第十七（主要记录孔子论述仁德，阐发礼乐治国之道）',
            '微子第十八（主要记录古代圣贤事迹，以及孔子众人周游列国中的言行，也记录了周游途中世人对于乱世的看法）',
            '子张第十九（主要记录孔子和弟子们探讨求学为道的言论，弟子们对于孔子的敬仰赞颂）',
            '尧曰第二十（本篇较为短小，疑有错漏。主要记录古代圣贤的言论和孔子对于为政的论述）'
        ],
        i = 0;

    setPassage();

    button.addEventListener('click', setPassage);

    function setPassage() {
        passage.textContent = analects[i];

        alert(analects[i]);

        console.log(analects[i]);

        i === analects.length - 1 ? i = 0 : i++;
    }

    destroyAll.addEventListener('click', function () {
        document.write(analects.join('<br>'));
    });
})();