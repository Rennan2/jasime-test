describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new server on submitServerInfo() with empty input', function (){
    serverNameInput.value= "";
    submitServerInfo () ;
    expect (Object.keys(allServers).length).toEqual();


  });

  it('should upadate #servertable on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();


    let curTdList = document.querySelectorALL ('Servertable tbody tr td');
    expect (curTdList.length).toEqual;
    expect(curTdList[0].innertext).toEqual('Alice')
    expect(curTdList[1].innertext).toEqual('0.00')
    expect(curTdList[2].innertext).toEqual('X')


  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
