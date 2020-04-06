/* Anotações
 * Coordenadas de rede:
 * y:>=55
 * RED(x:<=40)
 * BLUE(x:>=-50)
 */

class Player {
    constructor(id, auth, vitorias, derrotas, pontos, assistencias){
        this.id = id;
        this.auth = auth;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.pontos = pontos;
        this.assistencias = assistencias;
    }
    get rate(){
        if(this.derrotas+this.vitorias==0)
            return 0.0;
        else 
            return (100*(this.vitorias/(this.vitorias+this.derrotas)));
    }
}

class SessionPlayer {
    constructor(id, auth){
        this.id=id;
        this.auth=auth;
    }
}
var volleyStadium = `{
  name: "Volleyball 3D by Osprey from HaxMaps",
  width: 485,
  height: 205,
  spawnDistance: 455,
  bg: {
    type: "grass",
    width: 487,
    height: 207,
    kickOffRadius: 0,
    cornerRadius: 0,
  },
  vertexes: [
    { x: -350, y: -97, trait: "art" },
    { x: 350, y: -97, trait: "art" },
    { x: -351, y: -94, trait: "art" },
    { x: 351, y: -94, trait: "art" },
    { x: -352, y: -91, trait: "art" },
    { x: 352, y: -91, trait: "art" },
    { x: -353, y: -88, trait: "art" },
    { x: 353, y: -88, trait: "art" },
    { x: -354, y: -85, trait: "art" },
    { x: 354, y: -85, trait: "art" },
    { x: -355, y: -82, trait: "art" },
    { x: 355, y: -82, trait: "art" },
    { x: -356, y: -79, trait: "art" },
    { x: 356, y: -79, trait: "art" },
    { x: -357, y: -76, trait: "art" },
    { x: 357, y: -76, trait: "art" },
    { x: -358, y: -73, trait: "art" },
    { x: 358, y: -73, trait: "art" },
    { x: -359, y: -70, trait: "art" },
    { x: 359, y: -70, trait: "art" },
    { x: -360, y: -67, trait: "art" },
    { x: 360, y: -67, trait: "art" },
    { x: -361, y: -64, trait: "art" },
    { x: 361, y: -64, trait: "art" },
    { x: -362, y: -61, trait: "art" },
    { x: 362, y: -61, trait: "art" },
    { x: -363, y: -58, trait: "art" },
    { x: 363, y: -58, trait: "art" },
    { x: -364, y: -55, trait: "art" },
    { x: 364, y: -55, trait: "art" },
    { x: -365, y: -52, trait: "art" },
    { x: 365, y: -52, trait: "art" },
    { x: -366, y: -49, trait: "art" },
    { x: 366, y: -49, trait: "art" },
    { x: -367, y: -46, trait: "art" },
    { x: 367, y: -46, trait: "art" },
    { x: -368, y: -43, trait: "art" },
    { x: 368, y: -43, trait: "art" },
    { x: -369, y: -40, trait: "art" },
    { x: 369, y: -40, trait: "art" },
    { x: -370, y: -37, trait: "art" },
    { x: 370, y: -37, trait: "art" },
    { x: -371, y: -34, trait: "art" },
    { x: 371, y: -34, trait: "art" },
    { x: -372, y: -31, trait: "art" },
    { x: 372, y: -31, trait: "art" },
    { x: -373, y: -28, trait: "art" },
    { x: 373, y: -28, trait: "art" },
    { x: -374, y: -25, trait: "art" },
    { x: 374, y: -25, trait: "art" },
    { x: -375, y: -22, trait: "art" },
    { x: 375, y: -22, trait: "art" },
    { x: -376, y: -19, trait: "art" },
    { x: 376, y: -19, trait: "art" },
    { x: -377, y: -16, trait: "art" },
    { x: 377, y: -16, trait: "art" },
    { x: -378, y: -13, trait: "art" },
    { x: 378, y: -13, trait: "art" },
    { x: -379, y: -10, trait: "art" },
    { x: 379, y: -10, trait: "art" },
    { x: -380, y: -7, trait: "art" },
    { x: 380, y: -7, trait: "art" },
    { x: -381, y: -4, trait: "art" },
    { x: 381, y: -4, trait: "art" },
    { x: -382, y: -1, trait: "art" },
    { x: 382, y: -1, trait: "art" },
    { x: -383, y: 2, trait: "art" },
    { x: 383, y: 2, trait: "art" },
    { x: -384, y: 5, trait: "art" },
    { x: 384, y: 5, trait: "art" },
    { x: -385, y: 8, trait: "art" },
    { x: 385, y: 8, trait: "art" },
    { x: -386, y: 11, trait: "art" },
    { x: 386, y: 11, trait: "art" },
    { x: -387, y: 14, trait: "art" },
    { x: 387, y: 14, trait: "art" },
    { x: -388, y: 17, trait: "art" },
    { x: 388, y: 17, trait: "art" },
    { x: -389, y: 20, trait: "art" },
    { x: 389, y: 20, trait: "art" },
    { x: -390, y: 23, trait: "art" },
    { x: 390, y: 23, trait: "art" },
    { x: -391, y: 26, trait: "art" },
    { x: 391, y: 26, trait: "art" },
    { x: -392, y: 29, trait: "art" },
    { x: 392, y: 29, trait: "art" },
    { x: -393, y: 32, trait: "art" },
    { x: 393, y: 32, trait: "art" },
    { x: -394, y: 35, trait: "art" },
    { x: 394, y: 35, trait: "art" },
    { x: -395, y: 38, trait: "art" },
    { x: 395, y: 38, trait: "art" },
    { x: -396, y: 41, trait: "art" },
    { x: 396, y: 41, trait: "art" },
    { x: -397, y: 44, trait: "art" },
    { x: 397, y: 44, trait: "art" },
    { x: -398, y: 47, trait: "art" },
    { x: 398, y: 47, trait: "art" },
    { x: -399, y: 50, trait: "art" },
    { x: 399, y: 50, trait: "art" },
    { x: -400, y: 53, trait: "art" },
    { x: 400, y: 53, trait: "art" },
    { x: -401, y: 56, trait: "art" },
    { x: 401, y: 56, trait: "art" },
    { x: -402, y: 59, trait: "art" },
    { x: 402, y: 59, trait: "art" },
    { x: -403, y: 62, trait: "art" },
    { x: 403, y: 62, trait: "art" },
    { x: -404, y: 65, trait: "art" },
    { x: 404, y: 65, trait: "art" },
    { x: -405, y: 68, trait: "art" },
    { x: 405, y: 68, trait: "art" },
    { x: -406, y: 71, trait: "art" },
    { x: 406, y: 71, trait: "art" },
    { x: -407, y: 74, trait: "art" },
    { x: 407, y: 74, trait: "art" },
    { x: -408, y: 77, trait: "art" },
    { x: 408, y: 77, trait: "art" },
    { x: -409, y: 80, trait: "art" },
    { x: 409, y: 80, trait: "art" },
    { x: -410, y: 83, trait: "art" },
    { x: 410, y: 83, trait: "art" },
    { x: -411, y: 86, trait: "art" },
    { x: 411, y: 86, trait: "art" },
    { x: -412, y: 89, trait: "art" },
    { x: 412, y: 89, trait: "art" },
    { x: -413, y: 92, trait: "art" },
    { x: 413, y: 92, trait: "art" },
    { x: -414, y: 95, trait: "art" },
    { x: 414, y: 95, trait: "art" },
    { x: -415, y: 98, trait: "art" },
    { x: 415, y: 98, trait: "art" },
    { x: -416, y: 101, trait: "art" },
    { x: 416, y: 101, trait: "art" },
    { x: -417, y: 104, trait: "art" },
    { x: 417, y: 104, trait: "art" },
    { x: -418, y: 107, trait: "art" },
    { x: 418, y: 107, trait: "art" },
    { x: -419, y: 110, trait: "art" },
    { x: 419, y: 110, trait: "art" },
    { x: -420, y: 113, trait: "art" },
    { x: 420, y: 113, trait: "art" },
    { x: -421, y: 116, trait: "art" },
    { x: 421, y: 116, trait: "art" },
    { x: -422, y: 119, trait: "art" },
    { x: 422, y: 119, trait: "art" },
    { x: -423, y: 122, trait: "art" },
    { x: 423, y: 122, trait: "art" },
    { x: -424, y: 125, trait: "art" },
    { x: 424, y: 125, trait: "art" },
    { x: -425, y: 128, trait: "art" },
    { x: 425, y: 128, trait: "art" },
    { x: -426, y: 131, trait: "art" },
    { x: 426, y: 131, trait: "art" },
    { x: -427, y: 134, trait: "art" },
    { x: 427, y: 134, trait: "art" },
    { x: -428, y: 137, trait: "art" },
    { x: 428, y: 137, trait: "art" },
    { x: -429, y: 140, trait: "art" },
    { x: 429, y: 140, trait: "art" },
    { x: -430, y: 143, trait: "art" },
    { x: 430, y: 143, trait: "art" },
    { x: -431, y: 146, trait: "art" },
    { x: 431, y: 146, trait: "art" },
    { x: -432, y: 149, trait: "art" },
    { x: 432, y: 149, trait: "art" },
    { x: -433, y: 152, trait: "art" },
    { x: 433, y: 152, trait: "art" },
    { x: -434, y: 155, trait: "art" },
    { x: 434, y: 155, trait: "art" },
    { x: -434, y: 158, trait: "art" },
    { x: 434, y: 158, trait: "art" },
    { x: -349.5, y: -99.8, trait: "art" },
    { x: 349.5, y: -99.8, trait: "art" },
    { x: -436.5, y: 161, trait: "art" },
    { x: 436.5, y: 161, trait: "art" },
    { x: 441, y: 164, trait: "art" },
    { x: -441, y: 164, trait: "art" },
    { x: -351.3, y: -101.8, trait: "art" },
    { x: 351.3, y: -101.8, trait: "art" },
    { x: 445, y: 166, trait: "art" },
    { x: -445, y: 166, trait: "art" },
    { x: -448, y: 169, trait: "art" },
    { x: 448, y: 169, trait: "art" },
    { x: -1.5, y: 189.5, bCoef: 0, trait: "ballArea" },
    { x: -0.5, y: 69, bCoef: 0.5, trait: "ballArea" },
    { x: 1.5, y: 189.5, bCoef: 0, trait: "ballArea" },
    { x: -2.2, y: -111, trait: "art" },
    { x: -1, y: -195, trait: "art" },
    { x: 0, y: 49, trait: "art" },
    { x: 0, y: -66, trait: "art" },
    { x: 2, y: -111.8, trait: "art" },
    { x: 0, y: -181, trait: "art" },
    { x: 3, y: 188, bCoef: 0, trait: "ballArea" },
    { x: 2, y: 69, bCoef: 0.5, trait: "ballArea" },
    { x: -3, y: 186, bCoef: 0, trait: "ballArea" },
    { x: -2, y: 69, bCoef: 0.5, trait: "ballArea" },
    { x: 88, y: -81.5, trait: "art" },
    { x: 111, y: 196, trait: "art" },
    { x: 56.5, y: 165, trait: "art" },
    { x: 109, y: 169, trait: "art" },
    { x: 108, y: 159, trait: "art" },
    { x: 97, y: 28, trait: "art" },
    { x: 45.5, y: -86.5, trait: "art" },
    { x: 50.5, y: 24, trait: "art" },
    { x: 85.5, y: -101.7, trait: "art" },
    { x: 59, y: 162.5, trait: "art" },
    { x: 47, y: -88, trait: "art" },
    { x: 86.5, y: -83, trait: "art" },
    { x: 106, y: 166, trait: "art" },
    { x: 52.5, y: 23.5, trait: "art" },
    { x: 95.5, y: 28, trait: "art" },
    { x: 0, y: 218, trait: "playerArea" },
    { x: 58.3, y: 191, trait: "art" },
    { x: 57, y: 169.5, trait: "art" },
    { x: 45, y: -107, trait: "art" },
    { x: 45, y: -101.7, trait: "art" },
    { x: -21.5, y: 45.5, trait: "kickoffBarrier" },
    { x: 21.5, y: 45.5, trait: "kickoffBarrier" },
    { x: 0, y: -178, trait: "art" },
    { x: 1, y: -195, trait: "art" },
    { x: -485, y: -189, trait: "art" },
    { x: 485, y: -189, trait: "art" },
    { x: -485, y: -192, trait: "art" },
    { x: 485, y: -192, trait: "art" },
    { x: -485, y: -195, trait: "art" },
    { x: 485, y: -195, trait: "art" },
    { x: -485, y: -198, trait: "art" },
    { x: 485, y: -198, trait: "art" },
    { x: -485, y: -201, trait: "art" },
    { x: 485, y: -201, trait: "art" },
    { x: -485, y: -204, trait: "art" },
    { x: 485, y: -204, trait: "art" },
    { x: -485, y: -181, trait: "art" },
    { x: 485, y: -181, trait: "art" },
    { x: -485, y: -183, trait: "art" },
    { x: 485, y: -183, trait: "art" },
    { x: -485, y: -186, trait: "art" },
    { x: 485, y: -186, trait: "art" },
    { x: -2150, y: 4000, trait: "art" },
    { x: -426, y: -167, trait: "art" },
    { x: 426, y: -167, trait: "art" },
    { x: 2150, y: 4000, trait: "art" },
    { x: -427.5, y: -169, trait: "art" },
    { x: 427.5, y: -169, trait: "art" },
    { x: -429.5, y: -171.1, trait: "art" },
    { x: 429.5, y: -171.1, trait: "art" },
    { x: -431.5, y: -173.2, trait: "art" },
    { x: 431.5, y: -173.2, trait: "art" },
    { x: -433.5, y: -175.3, trait: "art" },
    { x: 433.5, y: -175.3, trait: "art" },
    { x: -425.5, y: -165, trait: "art" },
    { x: 425.5, y: -165, trait: "art" },
    { x: -424, y: -163, trait: "art" },
    { x: 424, y: -163, trait: "art" },
  ],
  segments: [
    { v0: 233, v1: 234, color: "9eba72", trait: "art" },
    { v0: 235, v1: 236, color: "c5c580", trait: "art" },
    { v0: 237, v1: 238, color: "c8b690", trait: "art" },
    { v0: 221, v1: 222, color: "a0aeb8", trait: "art" },
    { v0: 223, v1: 224, color: "70a0b4", trait: "art" },
    { v0: 225, v1: 226, color: "6090b0", trait: "art" },
    { v0: 227, v1: 228, color: "5080ac", trait: "art" },
    { v0: 229, v1: 230, color: "4070a4", trait: "art" },
    { v0: 231, v1: 232, color: "3060a0", trait: "art" },
    { v0: 212, v1: 219, color: "709868", trait: "art" },
    { v0: 188, v1: 212, vis: false, trait: "playerArea" },
    { v0: 194, v1: 192, color: "cfc999", trait: "playerArea" },
    { v0: 239, v1: 253, color: "618361", trait: "art" },
    { v0: 253, v1: 254, color: "5d7f5d", trait: "art" },
    { v0: 254, v1: 242, color: "618361", trait: "art" },
    { v0: 239, v1: 251, color: "3f613f", trait: "art" },
    { v0: 251, v1: 252, color: "3b5d3b", trait: "art" },
    { v0: 252, v1: 242, color: "3f613f", trait: "art" },
    { v0: 239, v1: 240, color: "433a3a", trait: "art" },
    { v0: 240, v1: 241, color: "433a3a", trait: "art" },
    { v0: 241, v1: 242, color: "433a3a", trait: "art" },
    { v0: 239, v1: 243, color: "895137", trait: "art" },
    { v0: 243, v1: 244, color: "8b5339", trait: "art" },
    { v0: 244, v1: 242, color: "895137", trait: "art" },
    { v0: 239, v1: 245, color: "693921", trait: "art" },
    { v0: 245, v1: 246, color: "693921", trait: "art" },
    { v0: 246, v1: 242, color: "693921", trait: "art" },
    { v0: 239, v1: 247, color: "5b321f", trait: "art" },
    { v0: 247, v1: 248, color: "5b321f", trait: "art" },
    { v0: 248, v1: 242, color: "5b321f", trait: "art" },
    { v0: 239, v1: 249, color: "4f2d1d", trait: "art" },
    { v0: 249, v1: 250, color: "4f2d1d", trait: "art" },
    { v0: 250, v1: 242, color: "4f2d1d", trait: "art" },
    { v0: 195, v1: 198, color: "556d55", trait: "art" },
    { v0: 193, v1: 198, color: "556d55", trait: "art" },
    { v0: 186, v1: 198, color: "556d55", trait: "art" },
    { v0: 198, v1: 200, color: "556d55", trait: "art" },
    { v0: 187, v1: 205, color: "5d755e", trait: "art" },
    { v0: 191, v1: 205, color: "5d755e", trait: "art" },
    { v0: 176, v1: 177, color: "eadaaa", trait: "art" },
    { v0: 180, v1: 181, color: "cfc28f", trait: "art" },
    { v0: 182, v1: 183, color: "9eaa62", trait: "art" },
    { v0: 0, v1: 1, color: "ad9f73", trait: "art" },
    { v0: 2, v1: 3, color: "b4a67a", trait: "art" },
    { v0: 4, v1: 5, color: "b6a97d", trait: "art" },
    { v0: 6, v1: 7, color: "bbac80", trait: "art" },
    { v0: 8, v1: 9, color: "beaf82", trait: "art" },
    { v0: 10, v1: 11, color: "c0b284", trait: "art" },
    { v0: 12, v1: 13, color: "c2b486", trait: "art" },
    { v0: 14, v1: 15, color: "c4b688", trait: "art" },
    { v0: 16, v1: 17, color: "c6b88a", trait: "art" },
    { v0: 18, v1: 19, color: "c8ba8c", trait: "art" },
    { v0: 20, v1: 21, color: "c9bc8d", trait: "art" },
    { v0: 22, v1: 23, color: "cabd8e", trait: "art" },
    { v0: 24, v1: 25, color: "cbbe8f", trait: "art" },
    { v0: 26, v1: 27, color: "ccbf90", trait: "art" },
    { v0: 28, v1: 29, color: "cdc091", trait: "art" },
    { v0: 30, v1: 31, color: "cec192", trait: "art" },
    { v0: 32, v1: 33, color: "cfc293", trait: "art" },
    { v0: 34, v1: 35, color: "d0c394", trait: "art" },
    { v0: 36, v1: 37, color: "d1c495", trait: "art" },
    { v0: 38, v1: 39, color: "d2c696", trait: "art" },
    { v0: 40, v1: 41, color: "d3c797", trait: "art" },
    { v0: 42, v1: 43, color: "d4c898", trait: "art" },
    { v0: 44, v1: 45, color: "d5c999", trait: "art" },
    { v0: 46, v1: 47, color: "d6ca9a", trait: "art" },
    { v0: 48, v1: 49, color: "d7cb9b", trait: "art" },
    { v0: 50, v1: 51, color: "d8cc9c", trait: "art" },
    { v0: 52, v1: 53, color: "d9cd9d", trait: "art" },
    { v0: 54, v1: 55, color: "dace9e", trait: "art" },
    { v0: 56, v1: 57, color: "dbd09f", trait: "art" },
    { v0: 58, v1: 59, color: "dcd1a0", trait: "art" },
    { v0: 60, v1: 61, color: "ddd2a1", trait: "art" },
    { v0: 62, v1: 63, color: "ded3a2", trait: "art" },
    { v0: 64, v1: 65, color: "dfd4a3", trait: "art" },
    { v0: 66, v1: 67, color: "e0d5a4", trait: "art" },
    { v0: 68, v1: 69, color: "e1d6a5", trait: "art" },
    { v0: 70, v1: 71, color: "e2d8a6", trait: "art" },
    { v0: 72, v1: 73, color: "e3d9a7", trait: "art" },
    { v0: 74, v1: 75, color: "e4daa8", trait: "art" },
    { v0: 76, v1: 77, color: "e5dba9", trait: "art" },
    { v0: 78, v1: 79, color: "e6dcaa", trait: "art" },
    { v0: 80, v1: 81, color: "e7ddab", trait: "art" },
    { v0: 82, v1: 83, color: "e8deac", trait: "art" },
    { v0: 84, v1: 85, color: "e9e0ad", trait: "art" },
    { v0: 86, v1: 87, color: "eae1ae", trait: "art" },
    { v0: 88, v1: 89, color: "ebe2af", trait: "art" },
    { v0: 90, v1: 91, color: "ece3b0", trait: "art" },
    { v0: 92, v1: 93, color: "ede4b1", trait: "art" },
    { v0: 94, v1: 95, color: "eee5b2", trait: "art" },
    { v0: 96, v1: 97, color: "efe6b3", trait: "art" },
    { v0: 98, v1: 99, color: "f0e8b4", trait: "art" },
    { v0: 100, v1: 101, color: "f1e9b5", trait: "art" },
    { v0: 102, v1: 103, color: "f2eab6", trait: "art" },
    { v0: 104, v1: 105, color: "f3ebb7", trait: "art" },
    { v0: 106, v1: 107, color: "f4ecb8", trait: "art" },
    { v0: 108, v1: 109, color: "f5edb9", trait: "art" },
    { v0: 110, v1: 111, color: "f5eeba", trait: "art" },
    { v0: 112, v1: 113, color: "f6efbb", trait: "art" },
    { v0: 114, v1: 115, color: "f6f0bc", trait: "art" },
    { v0: 116, v1: 117, color: "f7f1bd", trait: "art" },
    { v0: 118, v1: 119, color: "f7f2be", trait: "art" },
    { v0: 120, v1: 121, color: "f8f3bf", trait: "art" },
    { v0: 122, v1: 123, color: "f8f4c0", trait: "art" },
    { v0: 124, v1: 125, color: "f9f5c1", trait: "art" },
    { v0: 126, v1: 127, color: "f9f6c2", trait: "art" },
    { v0: 128, v1: 129, color: "faf7c3", trait: "art" },
    { v0: 130, v1: 131, color: "faf8c4", trait: "art" },
    { v0: 132, v1: 133, color: "faf9c5", trait: "art" },
    { v0: 134, v1: 135, color: "fbfac6", trait: "art" },
    { v0: 136, v1: 137, color: "fbfac7", trait: "art" },
    { v0: 138, v1: 139, color: "fbfbc8", trait: "art" },
    { v0: 140, v1: 141, color: "fcfbc9", trait: "art" },
    { v0: 142, v1: 143, color: "fcfcca", trait: "art" },
    { v0: 144, v1: 145, color: "fcfccb", trait: "art" },
    { v0: 146, v1: 147, color: "fdfdcc", trait: "art" },
    { v0: 148, v1: 149, color: "fdfdcd", trait: "art" },
    { v0: 150, v1: 151, color: "fdfdce", trait: "art" },
    { v0: 152, v1: 153, color: "fefecf", trait: "art" },
    { v0: 154, v1: 155, color: "fefed0", trait: "art" },
    { v0: 156, v1: 157, color: "fefed1", trait: "art" },
    { v0: 158, v1: 159, color: "ffffd2", trait: "art" },
    { v0: 160, v1: 161, color: "ffffd3", trait: "art" },
    { v0: 162, v1: 163, color: "ffffd4", trait: "art" },
    { v0: 164, v1: 165, color: "ffffd5", trait: "art" },
    { v0: 166, v1: 167, color: "ffffd6", trait: "art" },
    { v0: 168, v1: 169, color: "ffffd7", trait: "art" },
    { v0: 170, v1: 171, color: "faf0bc", trait: "art" },
    { v0: 0, v1: 170, color: "d2c498", trait: "art" },
    { v0: 1, v1: 171, color: "d2c498", trait: "art" },
    { v0: 185, v1: 189, color: "d4c494", trait: "art" },
    { v0: 187, v1: 188, color: "737373", trait: "art" },
    { v0: 191, v1: 220, color: "555555", trait: "art" },
    { v0: 213, v1: 214, color: "556d55", trait: "art" },
    { v0: 215, v1: 216, color: "5d755e", trait: "art" },
    { v0: 216, v1: 203, color: "b1a171", trait: "art" },
    { v0: 214, v1: 199, color: "a19161", trait: "art" },
    { v0: 200, v1: 201, color: "b1a171", trait: "art" },
    { v0: 201, v1: 202, color: "c1b181", trait: "art" },
    { v0: 202, v1: 197, color: "baaa7a", trait: "art" },
    { v0: 199, v1: 204, color: "c1b181", trait: "art" },
    { v0: 204, v1: 203, color: "baaa7a", trait: "art" },
    { v0: 205, v1: 197, color: "b1a171", trait: "art" },
    { v0: 199, v1: 200, color: "a99969", trait: "art" },
    { v0: 206, v1: 210, color: "c1b181", trait: "art" },
    { v0: 210, v1: 207, color: "baaa7a", trait: "art" },
    { v0: 208, v1: 211, color: "baaa7a", trait: "art" },
    { v0: 211, v1: 209, color: "baaa7a", trait: "art" },
    { v0: 209, v1: 206, color: "a99969", trait: "art" },
    { v0: 197, v1: 203, color: "b7a777", trait: "art" },
    { v0: 207, v1: 208, color: "b7a777", trait: "art" },
    { v0: 173, v1: 175, color: "435d91", trait: "art" },
    { v0: 175, v1: 174, color: "3a5e9c", trait: "art" },
    { v0: 174, v1: 172, color: "435d91", trait: "art" },
    { v0: 172, v1: 173, color: "4c6286", trait: "art" },
    { v0: 177, v1: 178, color: "eadaaa", trait: "art" },
    { v0: 181, v1: 178, color: "cfc28f", trait: "art" },
    { v0: 179, v1: 176, color: "eadaaa", trait: "art" },
    { v0: 179, v1: 180, color: "cfc28f", trait: "art" },
    { v0: 178, v1: 182, color: "a6aa6a", trait: "art" },
    { v0: 183, v1: 179, color: "a6aa6a", trait: "art" },
    { v0: 178, v1: 179, color: "98a060", trait: "art" },
    { v0: 216, v1: 205, color: "909658", trait: "art" },
    { v0: 189, v1: 190, color: "e1e1e1", trait: "art" },
    { v0: 190, v1: 192, color: "dcdcdc", trait: "art" },
    { v0: 195, v1: 196, color: "999999", bCoef: 0.65, cMask: ["ball"] },
    {
      v0: 195,
      v1: 196,
      vis: false,
      color: "999999",
      bCoef: 0,
      cMask: ["red", "blue"],
    },
    { v0: 184, v1: 185, color: "797979", bCoef: 0.65, cMask: ["ball"] },
    { v0: 186, v1: 185, color: "5c5c5c", bCoef: 0.65, cMask: ["ball"] },
    { v0: 193, v1: 194, color: "757575", bCoef: 0.65, cMask: ["ball"] },
    { v0: 194, v1: 196, vis: false, bCoef: 0.65, trait: "ballArea" },
    {
      v0: 188,
      v1: 212,
      curve: -244,
      vis: false,
      bCoef: 0,
      cMask: ["red"],
      cGroup: ["redKO"],
    },
    {
      v0: 212,
      v1: 188,
      curve: -244,
      vis: false,
      bCoef: 0,
      cMask: ["blue"],
      cGroup: ["blueKO"],
    },
    { v0: 217, v1: 218, curve: -180, vis: false, trait: "kickoffBarrier" },
    { v0: 218, v1: 217, curve: -180, vis: false, trait: "kickoffBarrier" },
    { v0: 212, v1: 186, vis: false, trait: "ballArea" },
  ],
  goals: [
    { p0: [-2, 205], p1: [-535, 205], team: "red" },
    { p0: [2, 205], p1: [535, 205], team: "blue" },
  ],
  discs: [
    {
      radius: 7.25,
      invMass: 0,
      pos: [-464, -94],
      color: "25488f",
      trait: "art",
    },
    {
      radius: 7.5,
      invMass: 0,
      pos: [-480, -54],
      color: "cf3333",
      trait: "art",
    },
    {
      radius: 5.5,
      invMass: 0,
      pos: [451, -190],
      color: "c00000",
      trait: "art",
    },
    { radius: 7.5, invMass: 0, pos: [465, -90], color: "441177", trait: "art" },
    {
      radius: 7.75,
      invMass: 0,
      pos: [472, -73],
      color: "587010",
      trait: "art",
    },
    {
      radius: 6.25,
      invMass: 0,
      pos: [-465, -102],
      color: "dfc7b4",
      trait: "art",
    },
    {
      radius: 6.5,
      invMass: 0,
      pos: [-481, -61.5],
      color: "6B5841",
      trait: "art",
    },
    {
      radius: 4.5,
      invMass: 0,
      pos: [451.5, -196.5],
      color: "dab7a4",
      trait: "art",
    },
    {
      radius: 3.75,
      invMass: 0,
      pos: [438.5, -197.5],
      color: "c9a27b",
      trait: "art",
    },
    {
      radius: 3.5,
      invMass: 0,
      pos: [423.5, -196],
      color: "ab8871",
      trait: "art",
    },
    {
      radius: 6.5,
      invMass: 0,
      pos: [466, -97.5],
      color: "c9a27b",
      trait: "art",
    },
    {
      radius: 6.75,
      invMass: 0,
      pos: [473, -80.5],
      color: "fae7d4",
      trait: "art",
    },
    {
      radius: 5,
      invMass: 0,
      pos: [-459, -186.5],
      color: "bb8871",
      trait: "art",
    },
    {
      radius: 4.25,
      invMass: 0,
      pos: [-461, -183],
      color: "dab7a4",
      trait: "art",
    },
    {
      radius: 3.25,
      invMass: 0,
      pos: [-447.5, -196.5],
      color: "d9b28b",
      trait: "art",
    },
    {
      radius: 5.5,
      invMass: 0,
      pos: [-474, -186],
      color: "333354",
      trait: "art",
    },
    {
      radius: 4.5,
      invMass: 0,
      pos: [-474.5, -191.5],
      color: "dab7a4",
      trait: "art",
    },
    {
      radius: 100000,
      invMass: 300,
      pos: [0, -100000],
      color: "ffffffff",
      bCoef: 0,
      cMask: ["ball"],
    },
  ],
  planes: [
    { normal: [0, 1], dist: -178, trait: "playerArea" },
    { normal: [0, -1], dist: -230, trait: "playerArea" },
    { normal: [0.93, 0.37], dist: -470, trait: "playerArea" },
    { normal: [-0.93, 0.37], dist: -470, trait: "playerArea" },
    { normal: [0.986, 0.165], dist: -482, bCoef: 0.2, trait: "ballArea" },
    { normal: [-0.986, 0.165], dist: -482, bCoef: 0.2, trait: "ballArea" },
    {
      normal: [1, 0],
      dist: -489,
      bCoef: 0.4,
      cMask: ["ball"],
      trait: "ballArea",
    },
    {
      normal: [-1, 0],
      dist: -489,
      bCoef: 0.4,
      cMask: ["ball"],
      trait: "ballArea",
    },
    { normal: [0, 1], dist: -1000, trait: "ballArea" },
    { normal: [0, -1], dist: -215, trait: "ballArea" },
    { normal: [1, 0], dist: -510, cMask: ["red", "blue"], trait: "playerArea" },
    {
      normal: [-1, 0],
      dist: -510,
      cMask: ["red", "blue"],
      trait: "playerArea",
    },
    { normal: [1, 0], dist: -100000, bCoef: 0, cGroup: ["ball"] },
    { normal: [-1, 0], dist: -100000, bCoef: 0, cGroup: ["ball"] },
    { normal: [0, 1], dist: -199000, bCoef: 0, cGroup: ["ball"] },
  ],
  traits: {
    art: { cGroup: [""], cMask: [""] },
    ballArea: { bCoef: 0.1, cMask: ["ball"] },
    playerArea: { bCoef: 0.1, cMask: ["red", "blue"] },
    goalNet: { bCoef: 0.05, cMask: ["ball", "red", "blue"] },
    kickoffBarrier: {
      bCoef: 0,
      cMask: ["red", "blue"],
      cGroup: ["redKO", "blueKO"],
    },
  },
  ballPhysics: {
    radius: 7.25,
    bCoef: 0.5,
    invMass: 1,
    damping: 0.99,
    cMask: ["wall"],
    color: "ffffff",
  },
  playerPhysics: {
    bCoef: 1,
    invMass: 0.1,
    damping: 0.97,
    acceleration: 0.09575,
    kickingAcceleration: 0.09575,
    kickStrength: 8.5,
    kickingDamping: 0.9,
  },
}`;

/**
 * Lista de Player. Armazena as características fixas de cada jogador.
 */
var allPlayers = [];

/**
 * Lista de players da sessão. Vincula id atual com seu auth;
 */
var allSessionPlayers=[];

/**
 * Lista de administradores da sala
 * facilita o processo de transferência de permissões
 */
var adminListId = [];

/**
 * Cria uma lista para cada time (red,blue,spec)
 * Com o intuito de identificar os jogadores de cada time
 */
var playersOnRed = [];
var playersOnBlue = [];
var playersOnSpec = [];

/**
 *  Lista de jogadores AFK
 */
var playersAFK = [];


var last_toucher;
var penultimate_toucher;
var count_players = 0;

var room = HBInit({
    roomName: "Vôlei 2x2 3D",
    maxPlayers: 8,
    noPlayer: false,
    playerName: "Árbitro",
    public: true,
    password: '4321'
});
room.setTeamsLock(true);
room.setCustomStadium(volleyStadium);
room.setScoreLimit(5);
room.setTimeLimit(0);


function updateAdmins() { 
    // Get all players
    var players = room.getPlayerList();
    if ( players.length == 0 ) return; // No players left, do nothing.
    if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
    room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

room.onPlayerJoin = function(player) {
    allSessionPlayers = room.getPlayerList().filter(p => p.id != 0); //.push(new SessionPlayer(player.id, player.auth))
    playersOnSpec.push(player);
    if(!allPlayers.some((p) => p.auth == player.auth)){
        allPlayers.push(new Player(allPlayers.length,player.auth,0,0,0,0));
    }
    
    updateAdmins();
    room.sendChat(`Bem-vindo, ${player.name} !`);
    count_players+=1;
    if(count_players == 2){
        for (let index = 0; index < allSessionPlayers.length; index++) {
            const element = allSessionPlayers[Math.floor(Math.random() * allSessionPlayers.length)]
            
        }
    }
    if(count_players >= 4){

    }
}

function move2Teams(){

}

room.onPlayerLeave = function(player) {
    count_players-=1;
    updateLists(player);
    updateAdmins();
}

function updateLists(player){
    var oldArr = allSessionPlayers;
    var isInAFK = playersAFK.findIndex(p => p.id==player.id);
    var isInBlue = playersOnBlue.findIndex(p => p.id==player.id);
    var isInRed = playersOnRed.findIndex(p => p.id==player.id);
    var isInSpec = playersOnSpec.findIndex(p => p.id==player.id);
    
    allSessionPlayers = room.getPlayerList().filter(p => p.id != 0);
    
    if(isInAFK >= 0)
    playersAFK.splice(isInAFK,1);
    if(isInBlue >= 0)
    playersOnBlue.splice(isInBlue,1);
    if(isInRed>= 0)
    playersOnRed.splice(isInRed,1);
    if(isInSpec>= 0)
    playersOnSpec.splice(isInSpec,1);
}

room.onPlayerBallKick = function(player) {
    penultimate_toucher = last_toucher;
    last_toucher = player;
    
}

room.onTeamGoal = function(team){
    if (team == last_toucher.team){
        let last_toucher_index = allPlayers.findIndex((p)=> p.auth = last_toucher.auth);
        allPlayers[last_toucher_index].score += 1;
        if (penultimate_toucher && team == penultimate_toucher.team && penultimate_toucher.id != last_toucher.id ){
            let penultimate_toucher_index = allPlayers.findIndex((p)=> p.auth = penultimate_toucher.auth);
            allPlayers[penultimate_toucher_index].assist += 1; 
        }
    }
}

room.onTeamVictory = (scores)=>{
    if(scores.red == scores.scoreLimit){
        movePlayers2Spec(playersOnBlue);
        movePlayers2On(2);
    }
    if(scores.blue == scores.scoreLimit){
        movePlayers2Spec(playersOnRed);
        movePlayers2On(1);
    }
}

function movePlayers2On(teamId){
    nextPlayers.forEach(id => {
        room.setPlayerTeam(id, teamId);
    });
}

function movePlayers2Spec(teamList){
    room.stopGame();
    playersOnSpec.push.apply(teamList);
    teamList.forEach(p => {
        room.setPlayerTeam(p.id, 0);
    });
    teamList.length = 0;
}

var specsReady = () => playersOnSpec.filter((spec)=> !playersAFK.some(e => e.id == spec.id && e.id != 0));

var nextPlayers = () => specsReady.slice(0,2).map((p) => p.id);

function printPlayerStat(player){
    var auth = allSessionPlayers.find(p => p.id==player.id).auth;
    var i = allPlayers.findIndex(p => p.auth==auth);
    room.sendChat(player.name + " Vitórias: "+ allPlayers[i].vitorias + ", Derrotas: " + allPlayers[i].derrotas + ", V/D: " + allPlayers[i].rate + "% , Pontos: " + allPlayers[i].pontos + ", Assist: " + allPlayers[i].assistencias);
}

room.onPlayerChat = function(player, message) {
    players = room.getPlayerList().filter((player) => player.id != 0 );
    if (message == "!afk"){
        var isInAFK = playersAFK.findIndex(p => p.id==player.id);
        if(isInAFK >= 0){
            playersAFK.splice(isInAFK,1);
            console.log(`Jogador ${player.name} removido da lista AFK`);
        }
        else{
            playersAFK.push(player);
            console.log(`Jogador ${player.name} inserido na lista AFK`);
        }
    }
    else if (message == "!me"){
        printPlayerStat(player);
    }
    else if (message == "!help"){
        printHelp();
    }
}

function printHelp(){
    room.sendChat("Comandos: !me, !afk, !help");
}