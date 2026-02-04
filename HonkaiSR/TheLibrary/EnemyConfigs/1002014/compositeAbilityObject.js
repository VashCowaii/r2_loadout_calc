const compositeAbilityObject = {
  "fullCharacterName": 1002014,
  "trimCharacterName": 1002014,
  "abilityList": [
    "1002014_Monster_W1_CocoliaP2_02_Ability01_Part02",
    "1002014_Monster_W1_CocoliaP2_02_Ability01_Part01",
    "1002014_Monster_W1_CocoliaP2_02_PassiveAbilityInitiate"
  ],
  "abilityObject": {
    "1002014_Monster_W1_CocoliaP2_02_Ability01_Part02": {
      "fileName": "1002014_Monster_W1_CocoliaP2_02_Ability01_Part02",
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
    "1002014_Monster_W1_CocoliaP2_02_Ability01_Part01": {
      "fileName": "1002014_Monster_W1_CocoliaP2_02_Ability01_Part01",
      "childAbilityList": [
        "1002014_Monster_W1_CocoliaP2_02_Ability01_Part01",
        "1002014_Monster_W1_CocoliaP2_02_Ability01_Part02",
        "1002014_Monster_W1_CocoliaP2_02_Ability01_Camera"
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
    "1002014_Monster_W1_CocoliaP2_02_PassiveAbilityInitiate": {
      "fileName": "1002014_Monster_W1_CocoliaP2_02_PassiveAbilityInitiate",
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
          "modifier": "Enemy_Standard_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_CocoliaP2_01_StandByEffect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_CocoliaP2_01_SpinSpeedController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_CocoliaP2_01_BeHitEffect"
        }
      ],
      "references": []
    }
  }
}