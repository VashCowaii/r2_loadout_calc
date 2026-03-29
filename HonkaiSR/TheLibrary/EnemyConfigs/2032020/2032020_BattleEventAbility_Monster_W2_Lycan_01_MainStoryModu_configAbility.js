const configAbility = {
  "fileName": "2032020_BattleEventAbility_Monster_W2_Lycan_01_MainStoryModu",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Destroy Battle Entity",
      "identifier": "RageEnd"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"843911212\">Monster_Monster_W2_Lycan_01_BattlePerform_LockHP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-847453897\">Monster_Monster_W2_Lycan_01_BattlePerform_DisAbleAction</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-847453897\">Monster_Monster_W2_Lycan_01_BattlePerform_DisAbleAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__843911212\">Monster_Monster_W2_Lycan_01_BattlePerform_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}