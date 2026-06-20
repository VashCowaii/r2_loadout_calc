const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Imaginary",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1797295901\">StageAbility_MazeStandard_EnterBattle_Imaginary_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1797295901\">StageAbility_MazeStandard_EnterBattle_Imaginary_Modifier</a>",
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
                  "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Imaginary.prefab"
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