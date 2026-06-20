const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Quantum",
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
      "modifier": "<a class=\"gModGreen\" id=\"951728079\">StageAbility_MazeStandard_EnterBattle_Quantum_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__951728079\">StageAbility_MazeStandard_EnterBattle_Quantum_Modifier</a>",
      "modifierFlags": [
        "MazeUseSkillTrigger",
        "STAT_TriggerBattleCharacter"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
              "dynamicStringsArray": [
                {
                  "name": "HitEffectPath",
                  "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Quantum.prefab"
                }
              ]
            }
          ],
          "priorityLevel": -70
        }
      ]
    }
  ]
}