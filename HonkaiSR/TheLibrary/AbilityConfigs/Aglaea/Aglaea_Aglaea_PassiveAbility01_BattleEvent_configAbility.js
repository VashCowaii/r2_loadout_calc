const configAbility = {
  "fileName": "Aglaea_Aglaea_PassiveAbility01_BattleEvent",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1954638967\">Aglaea_PassiveAbility01_BattleEvent</a>"
    },
    {
      "name": "Block Advance/Delay Effects",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "whitelist": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "whitelistTag": "Mask_TurnBasedAdvance"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1954638967\">Aglaea_PassiveAbility01_BattleEvent</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Change Character UI",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}.[[getSummoner]]"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"68059554\">Memosprite_AglaeaServant_Passive</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Servant_Aglaea_PassiveAbility01_ForceKill_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "AvatarBuffOthers",
                  "ownerState": "Anyone",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-498968511\">Aglaea_Ability03_Sub</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1725518252\">Aglaea_Ability03_ForbidSkill</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Memosprite}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (BattleEvent_Aglaea_BaseSpeed) || RETURN",
                "displayLines": "BattleEvent_Aglaea_BaseSpeed",
                "constants": [],
                "variables": [
                  "BattleEvent_Aglaea_BaseSpeed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}