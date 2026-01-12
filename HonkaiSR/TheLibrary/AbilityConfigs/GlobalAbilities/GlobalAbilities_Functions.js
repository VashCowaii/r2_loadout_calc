const configAbility = {
  "fileName": "GlobalAbilities_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "GlobalFunction_ClearAvatarArea_ByAbility",
      "parse": [
        {
          "name": "Find New Target",
          "from": "Allied Team",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Character ID",
                "ID": 1407,
                "target": "Use Prior Target(s) Defined",
                "characterName": "Castorice"
              },
              {
                "name": "Character ID",
                "ID": 1408,
                "target": "Use Prior Target(s) Defined",
                "characterName": "Phainon"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "ClearAvatarArea_ByAbility"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}