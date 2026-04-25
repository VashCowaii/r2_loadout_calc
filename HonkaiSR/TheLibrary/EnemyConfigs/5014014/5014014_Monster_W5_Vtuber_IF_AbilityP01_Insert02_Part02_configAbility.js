const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_IF_AbilityP01_Insert02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variable": "ADF_LoseHPRatio_ScreenBonus",
      "target2": null,
      "variable2": "ADF_LoseHPRatio_ScreenBonus"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
      },
      "ifTargetFound": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "sourceTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (ADF_LoseHPRatio_ScreenBonus) || RETURN",
            "displayLines": "ADF_LoseHPRatio_ScreenBonus",
            "constants": [],
            "variables": [
              "ADF_LoseHPRatio_ScreenBonus"
            ]
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}