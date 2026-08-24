const configAbility = {
  "fileName": "20052_BattleEventAbility_Monster_W5_AsatPramad_RestartAfterBE",
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
      "modifier": "<a class=\"gModGreen\" id=\"860033275\">MBattleEventAbility_Monster_W5_AsatPramad_RestartAfterBE</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__860033275\">MBattleEventAbility_Monster_W5_AsatPramad_RestartAfterBE</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              },
              "set": 0
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W5_AsatPramad_RestartPhase3AfterBE",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyChangeState",
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    }
  ]
}