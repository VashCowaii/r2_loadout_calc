const compositeAbilityObject = {
  "fullCharacterName": 1002018,
  "trimCharacterName": 1002018,
  "abilityList": [
    "1002018_Monster_W1_CocoliaP2_02_Ability01_Part02",
    "1002018_Monster_W1_CocoliaP2_02_Ability01_Part01",
    "1002018_Monster_W1_CocoliaP2_02_PassiveAbilityInitiate"
  ],
  "abilityObject": {
    "1002018_Monster_W1_CocoliaP2_02_Ability01_Part02": {
      "fileName": "1002018_Monster_W1_CocoliaP2_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1002018_Monster_W1_CocoliaP2_02_Ability01_Part01": {
      "fileName": "1002018_Monster_W1_CocoliaP2_02_Ability01_Part01",
      "childAbilityList": [
        "1002018_Monster_W1_CocoliaP2_02_Ability01_Part01",
        "1002018_Monster_W1_CocoliaP2_02_Ability01_Part02",
        "1002018_Monster_W1_CocoliaP2_02_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002018_Monster_W1_CocoliaP2_02_PassiveAbilityInitiate": {
      "fileName": "1002018_Monster_W1_CocoliaP2_02_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1663784958\">Enemy_W1_CocoliaP2_01_BeHitEffect</a>"
        }
      ],
      "references": []
    }
  }
}