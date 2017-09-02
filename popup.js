$(function () {

    $('#weightedButton').click(function() {
        var totalMark = 0;
        var totalWeight = 0;
        var finalMark = $('#finalmark').val();
        var finalWeight = $('#finalweight').val();

        var mark1 = $('#mark1').val();
        var weight1 = $('#weight1').val();
        if (mark1 && weight1) {
            totalMark += parseFloat(mark1 * (weight1 / 100));
            totalWeight += parseFloat(weight1);
        }

        var mark2 = $('#mark2').val();
        var weight2 = $('#weight2').val();
        if (mark2 && weight2) {
            totalMark += parseFloat(mark2 * (weight2 / 100));
            totalWeight += parseFloat(weight2);
        }

        var mark3 = $('#mark3').val();
        var weight3 = $('#weight3').val();
        if (mark3 && weight3) {
            totalMark += parseFloat(mark3 * (weight3 / 100));
            totalWeight += parseFloat(weight3);
        }

        var mark4 = $('#mark4').val();
        var weight4 = $('#weight4').val();
        if (mark4 && weight4) {
            totalMark += parseFloat(mark4 * (weight4 / 100));
            totalWeight += parseFloat(weight4);
        }

        var mark5 = $('#mark5').val();
        var weight5 = $('#weight5').val();
        if (mark5 && weight5) {
            totalMark += parseFloat(mark5 * (weight5 / 100));
            totalWeight += parseFloat(weight5);
        }

        var mark6 = $('#mark6').val();
        var weight6 = $('#weight6').val();
        if (mark6 && weight6) {
            totalMark += parseFloat(mark6 * (weight6 / 100));
            totalWeight += parseFloat(weight6);
        }

        var mark7 = $('#mark7').val();
        var weight7 = $('#weight7').val();
        if (mark7 && weight7) {
            totalMark += parseFloat(mark7 * (weight7 / 100));
            totalWeight += parseFloat(weight7);
        }

        var mark8 = $('#mark8').val();
        var weight8 = $('#weight8').val();
        if (mark8 && weight8) {
            totalMark += parseFloat(mark8 * (weight8 / 100));
            totalWeight += parseFloat(weight8);
        }

        var mark9 = $('#mark9').val();
        var weight9 = $('#weight9').val();
        if (mark9 && weight9) {
            totalMark += parseFloat(mark9 * (weight9 / 100));
            totalWeight += parseFloat(weight9);
        }

        var mark10 = $('#mark10').val();
        var weight10 = $('#weight10').val();
        if (mark10 && weight10) {
            totalMark += parseFloat(mark10 * (weight10 / 100));
            totalWeight += parseFloat(weight10);
        }

        var twoPlacedWeightedAverage = parseFloat((totalMark / totalWeight) * 100).toFixed(2);
        var twoPlacedTotal = parseFloat(totalMark).toFixed(2);

        chrome.storage.sync.set({
            'weightedAverage': twoPlacedWeightedAverage
        });

        chrome.storage.sync.set({
            'weight': totalWeight
        });

        $('#weightedAverage').text(twoPlacedWeightedAverage);
        $('#total').text(twoPlacedTotal);
        $('#weight').text(totalWeight);
    });

    $('#finalButton').click(function () {
        chrome.storage.sync.get('weightedAverage', function (twoPlacedWeightedAverage) {
            chrome.storage.sync.get('weight', function (overallWeight) {

                var totalMark = twoPlacedWeightedAverage.weightedAverage;
                var totalWeight = overallWeight.weight;
                var finalWeight = $('#finalWeight').val();
                var finalMark = $('#finalMark').val();

                var weightedRequirement = parseFloat(((finalMark - (totalMark * (totalWeight / 100))) / (finalWeight / 100))).toFixed(2);

                $('#requiredMark').text(weightedRequirement);
            });
        });
    });

});