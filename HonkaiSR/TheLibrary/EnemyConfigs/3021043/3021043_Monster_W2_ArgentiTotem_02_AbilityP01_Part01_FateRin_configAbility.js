const configAbility = {
  "fileName": "3021043_Monster_W2_ArgentiTotem_02_AbilityP01_Part01_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Imitation of Alacritous Desire"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PowerFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"777357174\">Enemy_W2_Beast02_BlockDamage_FateRin</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
          "duration": -1
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "Activity_FateRin_MasterAvatar"
          },
          "modifier": "<a class=\"gModGreen\" id=\"777357174\">Enemy_W2_Beast02_BlockDamage_FateRin</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
          "duration": -1
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}