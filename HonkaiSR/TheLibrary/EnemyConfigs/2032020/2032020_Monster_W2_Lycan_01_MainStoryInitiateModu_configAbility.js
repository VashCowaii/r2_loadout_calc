const configAbility = {
  "fileName": "2032020_Monster_W2_Lycan_01_MainStoryInitiateModu",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1606104003\">Enemy_W2_Lycan_01_MainStoryModuRevive</a>"
    },
    {
      "name": "Add Ability",
      "abilityName": "Monster_W2_Lycan_01_Revive_Insert"
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "BattleEventAbility_Monster_W2_Lycan_01_MainStoryModu",
      "parameters": {}
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1606104003\">Enemy_W2_Lycan_01_MainStoryModuRevive</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": 0.3
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W2_Lycan_01_Revive_Insert",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}