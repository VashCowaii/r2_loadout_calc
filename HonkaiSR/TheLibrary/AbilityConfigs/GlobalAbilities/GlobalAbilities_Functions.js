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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-777670637\">GlobalFunction_ClearAvatarArea_ByAbility</a>",
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterID": "1407 (Castorice)"
              },
              {
                "name": "Character ID",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterID": "1408 (Phainon)"
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
              "modifier": "<a class=\"gModGreen\" id=\"253720974\">ClearAvatarArea_ByAbility</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}