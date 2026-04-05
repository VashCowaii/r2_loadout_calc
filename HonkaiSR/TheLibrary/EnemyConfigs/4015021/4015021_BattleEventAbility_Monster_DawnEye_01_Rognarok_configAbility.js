const configAbility = {
  "fileName": "4015021_BattleEventAbility_Monster_DawnEye_01_Rognarok",
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
      "modifier": "<a class=\"gModGreen\" id=\"-446760993\">Modifier_BattleEventAbility_WMonster_DawnEye_01_Rognarok</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-446760993\">Modifier_BattleEventAbility_WMonster_DawnEye_01_Rognarok</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Target Exists",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "RagBattleEvent"
                }
              },
              "abilityName": "BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "valuePerStack": {
                "BaseAttack": {
                  "operator": "Variables[0] (BaseAttack) || RETURN",
                  "displayLines": "BaseAttack",
                  "constants": [],
                  "variables": [
                    "BaseAttack"
                  ]
                }
              },
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