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
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Character ID",
                "ID": 1407,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Castorice"
              },
              {
                "name": "Character ID",
                "ID": 1408,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Phainon"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "ClearAvatarArea_ByAbility"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}