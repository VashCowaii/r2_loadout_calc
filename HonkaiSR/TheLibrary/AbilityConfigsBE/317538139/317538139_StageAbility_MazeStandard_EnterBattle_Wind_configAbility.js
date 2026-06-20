const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_Wind",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1102966786\">StageAbility_MazeStandard_EnterBattle_Wind_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1102966786\">StageAbility_MazeStandard_EnterBattle_Wind_Modifier</a>",
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
                  "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Wind.prefab"
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