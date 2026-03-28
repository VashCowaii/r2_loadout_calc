const configAbility = {
  "fileName": "5014015_Monster_W5_Vtuber_PassiveAbilityInitiate_RLBoss",
  "childAbilityList": [
    "5014015_Monster_W5_Vtuber_PassiveAbilityInitiate_RLBoss"
  ],
  "skillTrigger": "PassiveSkill04",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1281829506\">Monster_W5_Vtuber_RLBoss_Passive</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1281829506\">Monster_W5_Vtuber_RLBoss_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}