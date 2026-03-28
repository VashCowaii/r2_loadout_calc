const configAbility = {
  "fileName": "5014012_Monster_W5_Vtuber_Ability07_Part01",
  "childAbilityList": [
    "5014012_Monster_W5_Vtuber_Ability07_Part01",
    "5014012_Monster_W5_Vtuber_Ability07_Part02",
    "5014012_Monster_W5_Vtuber_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true,
      "toRemove": [
        "DisableAction",
        "STAT_CTRL"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1646818833\">Enemy_W5_Vtuber_MainStory_Ability07</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-902917045\">Modifier_StageSpecialAbility_20501090_Ability07</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Unique Effect Name",
            "uniqueName": "W5_Vtuber_00_Screen01",
            "allowUnReady": true
          },
          "passed": [
            "EventTypeSPARXIECON (Not always an error)[1 false]"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Unique Effect Name",
            "uniqueName": "W5_Vtuber_00_Screen02",
            "allowUnReady": true
          },
          "passed": [
            "EventTypeSPARXIECON (Not always an error)[1 false]"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-902917045\">Modifier_StageSpecialAbility_20501090_Ability07</a>"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Vtuber_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}