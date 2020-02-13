const fetchPlayersData = function () {

    console.log($("#team-input").val())
    let input = $("#team-input").val()

    $("#playersList").empty()

    $.get(`/teams/${input}`, function (teamData) {

        teamData.forEach(e => {
            $("#playersList").append(`<div class="player">${e.firstName} ${e.lastName}<img src="${e.imgSrc}" onerror="this.onerror=null;this.src='https://cdn.worldvectorlogo.com/logos/nba.svg';"></div>`)
        });
    })
}

const fetchDreamTeam = function () {
    $("#playersList").empty()

    $.get(`/dreamTeam`, function (teamData) {

        teamData.forEach(e => {
            let firstName =e.split(' ').slice(0, -1).join(' ')
            let lastName =e.split(' ').slice(-1).join(' ')
            $("#playersList").append(`<div class="player">${e}<img src="https://nba-players.herokuapp.com/players/${lastName}/${firstName}" onerror="this.onerror=null;this.src='https://cdn.worldvectorlogo.com/logos/nba.svg';"></div>`)
        });
    })
}


$("#playersList").on("click", ".player", function () {

    let data = $(this).text()
    $.post('/roster', { name: data }, function (response) {
        console.log("posted " + data)
    })
});
