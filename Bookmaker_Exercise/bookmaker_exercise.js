'use strict';

(function () {
    var CONTINENTS = {
        ASIA: 'AS',
        EUROPE: 'EU',
        NORTH_AMERICA: 'NA',
        SOUTH_AMERICA: 'SA',
        AUSTRALIA: 'AU',
        AFRICA: 'AF',
    };

    function getFormattedCountryName() {
        var formatted = this.name[0];
        for (var i = 0; i < this.name.length; i++) {
            var current = this.name[i];

            switch (current) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':
                    continue;
            }
            formatted += current;
            break;
        }
        return formatted;
    }

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.getformatedName = getFormattedCountryName;
    }

    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.getFormattedDate = function () {
            return this.day + '.' + this.month + '.' + this.year + '.';
        };
    }

    function Person(name, surename, dateOfBirth) {
        this.name = name;
        this.surename = surename;
        this.dateOfBirth = dateOfBirth;
        this.getInfo = function () {
            return (this.name + '' + this.surename + ', ' + this.dateOfBirth.getFormattedDate());
        };
        this.getAge = function () {
            return 2021 - this.dateOfBirth.year + ' years';
        };
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getBetInfo = function () {
            return (this.country.getformatedName() + ', ' + this.betAmount * this.country.odds + ' eur' + this.person.name + ' ' + this.person.surename + ', ' + this.person.getAge());
        };
    }

    function Address(country, city, postalcode, street, number) {
        this.country = country;
        this.city = city;
        this.postalcode = postalcode;
        this.street = street;
        this.number = number;
        this.getFormattedAddress = function () {
            return (this.street + ' ' + this.number + ', ' + this.postalcode + ' ' + this.city + ', ' + this.getFormattedCountry());
        };
        this.getFormattedCountry = getFormattedCountryName;
    }

    function BettingPlace(address) {
        this.players = [];
        this.address = address;
        this.addPlayer = function (player) {
            this.players[this.players.length] = player;
        };
        this.getSumOfBets = function () {
            var sum = 0;
            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                sum += player.betAmount;
            }
            return sum;
        };
        this.getListOfPlayers = function () {
            var playersList = '';
            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                playersList += "\n\t" + player.getBetInfo();
            }
            return playersList;
        };
        this.printFormatedInfo = function () {
            return (this.address.street + ', ' + this.address.postalcode + ' ' + this.address.city + ', sum of all bets: ' + this.getSumOfBets() + this.getListOfPlayers());
        };
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.getTotalnumberOfPlayers = function () {
            var total = 0;
            this.listOfBettingPlaces.forEach(function (place) {
                total += place.listOfPlayers.length;
            });
            return total;
        };
        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces[this.listOfBettingPlaces.length] = bettingPlace;
        };
        this.getNumberOfBetsByCountry = function (countryNameToCheck) {
            var total = 0;
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var place = this.listOfBettingPlaces[i];
                for (var j = 0; j < place.players.length; j++) {
                    var player = place.players[j];
                    var currentCountryName = player.country.name;
                    if (currentCountryName === countryNameToCheck) {
                        total++;
                    }
                }
            }
            return total;
        };
        this.getInfo = function () {
            var numOfBettingPlaces = this.listOfBettingPlaces.length;
            var bettingPlacesList = '';
            var totalNumberOfBets = 0;

            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var place = this.listOfBettingPlaces[i];
                totalNumberOfBets += place.players.length;
                bettingPlacesList += ' ' + place.printFormatedInfo() + '\n';
            }
            return (this.competition + ', ' + numOfBettingPlaces + ' betting places, ' + totalNumberOfBets + ' bets\n' + bettingPlacesList + 'there are ' + this.getNumberOfBetsByCountry('Serbia') + ' bets on Serbia');
        };
    }

    function createPlayer(name, surname, day, month, year, betAmount, country) {
        var date = new Date(day, month, year);
        var person = new Person(name, surname, date);

        return new Player(person, betAmount, country);
    }

    function createBettingPlace(country, city, postalcode, street, number) {
        var address = new Address(country, city, postalcode, street, number);
        return new BettingPlace(address);
    }

    var serbia = new Country('Serbia', 2, CONTINENTS.EUROPE);
    var brasil = new Country('Brasil', 5, CONTINENTS.SOUTH_AMERICA);

    var player1 = createPlayer('Pera', 'Peric', 8, 2, 1990, 100, serbia);
    var player2 = createPlayer('Jovan', 'Jovanovic', 6, 8, 1980, 200, brasil);
    var player3 = createPlayer('Milan', 'Milanovic', 1, 3, 1999, 150, serbia);
    var player4 = createPlayer('Petar', 'Petrovic', 10, 11, 2000, 190, serbia);

    var bettingPlace1 = createBettingPlace('Serbia', 'Belgrade', 11000, 'Nemanjina', 4);
    var bettingPlace2 = createBettingPlace('Serbia', 'Novi Sad', 22000, 'Kneza Milosa', 25);

    var bettingHouse = new BettingHouse('Football World Cup Winner');

    bettingPlace1.addPlayer(player1);
    bettingPlace2.addPlayer(player2);
    bettingPlace1.addPlayer(player3);
    bettingPlace2.addPlayer(player4);

    bettingHouse.addBettingPlace(bettingPlace1);
    bettingHouse.addBettingPlace(bettingPlace2);

    console.log(bettingHouse.getInfo());
})();