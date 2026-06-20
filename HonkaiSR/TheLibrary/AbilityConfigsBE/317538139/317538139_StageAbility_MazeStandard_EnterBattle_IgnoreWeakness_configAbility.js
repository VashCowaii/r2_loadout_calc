const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_IgnoreWeakness",
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
      "modifier": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>",
      "modifierFlags": [
        "MazeUseSkillTrigger",
        "STAT_TriggerBattleCharacter"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "SWITCH",
              "source": {
                "name": "Damage Type Source",
                "sourceType": "ReadTargetType",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Physical",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Physical.prefab"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Fire",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Fire.prefab"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Ice",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Ice.prefab"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Thunder",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Thunder.prefab"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Wind",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Wind.prefab"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Quantum",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Quantum.prefab"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": "Imaginary",
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                      "variables": {
                        "IsForceStanceDamage": 1
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "HitEffectPath",
                          "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Imaginary.prefab"
                        }
                      ]
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ],
          "priorityLevel": -70
        }
      ]
    }
  ]
}