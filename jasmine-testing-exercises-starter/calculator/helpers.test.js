it('sum total tip amount of sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(60);

});
it('total bill of all payments on sumPaymentTotal()', function(){
    expect(sumPaymentTotal('billAmt')).toEqual(100);
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();
    expect(sumPaymentTotal(billAmt)).toEqual(300);
});
it('generate new td from value and append to tr on()',function(){
    let newTr = document.createElement('tr');
    appendTd(newTr,'test');
    expect(newTr.children.length).toEqual(1);

});
it('sum tip percent of single tip()', function(){
    expect (calculateTipPercent(100,23)).toEqual(23);
    expect(calculateTipPercent(111,11)).toEqual(10);


});
it('generate delete td and append to tr on appendDeleteBtn', function () {
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);
    expect(newTr.firstChild.innerHTML).toEqual('X');
    expect(newTr.children.length).toEqual(1);
  });


  afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';



  });

