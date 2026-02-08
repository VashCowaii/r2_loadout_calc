const configAbility = {
  "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_001",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1623304526\">StrongChallengeEX_Test_StageAbility_LE_001</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1623304526\">StrongChallengeEX_Test_StageAbility_LE_001</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak"
            },
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}