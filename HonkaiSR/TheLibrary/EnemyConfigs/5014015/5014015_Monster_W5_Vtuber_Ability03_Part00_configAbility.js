const configAbility = {
  "fileName": "5014015_Monster_W5_Vtuber_Ability03_Part00",
  "childAbilityList": [
    "5014015_Monster_W5_Vtuber_Ability03_Part00",
    "5014015_Monster_W5_Vtuber_Ability03_Part01",
    "5014015_Monster_W5_Vtuber_Ability03_Part02",
    "5014015_Monster_W5_Vtuber_Ability03_Part03",
    "5014015_Monster_W5_Vtuber_Ability03Pre_Camera",
    "5014015_Monster_W5_Vtuber_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Reset Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1869034007\">Enemy_W5_Vtuber_MuteUltra</a>"
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase03"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{@Sparxiecon: Output Port 1}}"
      },
      "phase": "Phase03"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2019186097\">Enemy_W5_Vtuber_Locking</a>"
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "skillType": "ControlSkill03",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "SelectTarget"
      },
      "afterInjection": []
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2019186097\">Enemy_W5_Vtuber_Locking</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1869034007\">Enemy_W5_Vtuber_MuteUltra</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
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