export const squares = {
  createSquare(
    name,
    pricetext,
    color,
    price,
    groupNumber,
    baserent,
    rent1,
    rent2,
    rent3,
    rent4,
    rent5
  ) {
    this.name = name
    this.pricetext = pricetext
    this.color = color
    this.owner = 0
    this.mortgage = false
    this.house = 0
    this.hotel = 0
    this.groupNumber = groupNumber || 0
    this.price = price || 0
    this.baserent = baserent || 0
    this.rent1 = rent1 || 0
    this.rent2 = rent2 || 0
    this.rent3 = rent3 || 0
    this.rent4 = rent4 || 0
    this.rent5 = rent5 || 0
    this.landcount = 0

    if (groupNumber === 3 || groupNumber === 4) {
      this.houseprice = 50
    } else if (groupNumber === 5 || groupNumber === 6) {
      this.houseprice = 100
    } else if (groupNumber === 7 || groupNumber === 8) {
      this.houseprice = 150
    } else if (groupNumber === 9 || groupNumber === 10) {
      this.houseprice = 200
    } else {
      this.houseprice = 0
    }
  },

  createAllSquares() {
    var square = []

    square[0] = new this.createSquare(
      'GO',
      'COLLECT $200 SALARY AS YOU PASS.',
      '#FFFFFF'
    )
    square[1] = new this.createSquare(
      'Mediterranean Avenue',
      '$60',
      '#8B4513',
      60,
      3,
      2,
      10,
      30,
      90,
      160,
      250
    )
    square[2] = new this.createSquare(
      'Community Chest',
      'FOLLOW INSTRUCTIONS ON TOP CARD',
      '#FFFFFF'
    )
    square[3] = new this.createSquare(
      'Baltic Avenue',
      '$60',
      '#8B4513',
      60,
      3,
      4,
      20,
      60,
      180,
      320,
      450
    )
    square[4] = new this.createSquare('City Tax', 'Pay $200', '#FFFFFF')
    square[5] = new this.createSquare(
      'Reading Railroad',
      '$200',
      '#FFFFFF',
      200,
      1
    )
    square[6] = new this.createSquare(
      'Oriental Avenue',
      '$100',
      '#87CEEB',
      100,
      4,
      6,
      30,
      90,
      270,
      400,
      550
    )
    square[7] = new this.createSquare(
      'Chance',
      'FOLLOW INSTRUCTIONS ON TOP CARD',
      '#FFFFFF'
    )
    square[8] = new this.createSquare(
      'Vermont Avenue',
      '$100',
      '#87CEEB',
      100,
      4,
      6,
      30,
      90,
      270,
      400,
      550
    )
    square[9] = new this.createSquare(
      'Connecticut Avenue',
      '$120',
      '#87CEEB',
      120,
      4,
      8,
      40,
      100,
      300,
      450,
      600
    )
    square[10] = new this.createSquare('Just Visiting', '', '#FFFFFF')
    square[11] = new this.createSquare(
      'St. Charles Place',
      '$140',
      '#FF0080',
      140,
      5,
      10,
      50,
      150,
      450,
      625,
      750
    )
    square[12] = new this.createSquare(
      'Electric Company',
      '$150',
      '#FFFFFF',
      150,
      2
    )
    square[13] = new this.createSquare(
      'States Avenue',
      '$140',
      '#FF0080',
      140,
      5,
      10,
      50,
      150,
      450,
      625,
      750
    )
    square[14] = new this.createSquare(
      'Virginia Avenue',
      '$160',
      '#FF0080',
      160,
      5,
      12,
      60,
      180,
      500,
      700,
      900
    )
    square[15] = new this.createSquare(
      'Pennsylvania Railroad',
      '$200',
      '#FFFFFF',
      200,
      1
    )
    square[16] = new this.createSquare(
      'St. James Place',
      '$180',
      '#FFA500',
      180,
      6,
      14,
      70,
      200,
      550,
      750,
      950
    )
    square[17] = new this.createSquare(
      'Community Chest',
      'FOLLOW INSTRUCTIONS ON TOP CARD',
      '#FFFFFF'
    )
    square[18] = new this.createSquare(
      'Tennessee Avenue',
      '$180',
      '#FFA500',
      180,
      6,
      14,
      70,
      200,
      550,
      750,
      950
    )
    square[19] = new this.createSquare(
      'New York Avenue',
      '$200',
      '#FFA500',
      200,
      6,
      16,
      80,
      220,
      600,
      800,
      1000
    )
    square[20] = new this.createSquare('Free Parking', '', '#FFFFFF')
    square[21] = new this.createSquare(
      'Kentucky Avenue',
      '$220',
      '#FF0000',
      220,
      7,
      18,
      90,
      250,
      700,
      875,
      1050
    )
    square[22] = new this.createSquare(
      'Chance',
      'FOLLOW INSTRUCTIONS ON TOP CARD',
      '#FFFFFF'
    )
    square[23] = new this.createSquare(
      'Indiana Avenue',
      '$220',
      '#FF0000',
      220,
      7,
      18,
      90,
      250,
      700,
      875,
      1050
    )
    square[24] = new this.createSquare(
      'Illinois Avenue',
      '$240',
      '#FF0000',
      240,
      7,
      20,
      100,
      300,
      750,
      925,
      1100
    )
    square[25] = new this.createSquare(
      'B&O Railroad',
      '$200',
      '#FFFFFF',
      200,
      1
    )
    square[26] = new this.createSquare(
      'Atlantic Avenue',
      '$260',
      '#FFFF00',
      260,
      8,
      22,
      110,
      330,
      800,
      975,
      1150
    )
    square[27] = new this.createSquare(
      'Ventnor Avenue',
      '$260',
      '#FFFF00',
      260,
      8,
      22,
      110,
      330,
      800,
      975,
      1150
    )
    square[28] = new this.createSquare('Water Works', '$150', '#FFFFFF', 150, 2)
    square[29] = new this.createSquare(
      'Marvin Gardens',
      '$280',
      '#FFFF00',
      280,
      8,
      24,
      120,
      360,
      850,
      1025,
      1200
    )
    square[30] = new this.createSquare(
      'Go to Jail',
      'Go directly to Jail. Do not pass GO. Do not collect $200.',
      '#FFFFFF'
    )
    square[31] = new this.createSquare(
      'Pacific Avenue',
      '$300',
      '#008000',
      300,
      9,
      26,
      130,
      390,
      900,
      110,
      1275
    )
    square[32] = new this.createSquare(
      'North Carolina Avenue',
      '$300',
      '#008000',
      300,
      9,
      26,
      130,
      390,
      900,
      110,
      1275
    )
    square[33] = new this.createSquare(
      'Community Chest',
      'FOLLOW INSTRUCTIONS ON TOP CARD',
      '#FFFFFF'
    )
    square[34] = new this.createSquare(
      'Pennsylvania Avenue',
      '$320',
      '#008000',
      320,
      9,
      28,
      150,
      450,
      1000,
      1200,
      1400
    )
    square[35] = new this.createSquare('Short Line', '$200', '#FFFFFF', 200, 1)
    square[36] = new this.createSquare(
      'Chance',
      'FOLLOW INSTRUCTIONS ON TOP CARD',
      '#FFFFFF'
    )
    square[37] = new this.createSquare(
      'Park Place',
      '$350',
      '#0000FF',
      350,
      10,
      35,
      175,
      500,
      1100,
      1300,
      1500
    )
    square[38] = new this.createSquare('LUXURY TAX', 'Pay $100', '#FFFFFF')
    square[39] = new this.createSquare(
      'Boardwalk',
      '$400',
      '#0000FF',
      400,
      10,
      50,
      200,
      600,
      1400,
      1700,
      2000
    )

    return square
  }
}
